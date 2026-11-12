# @produck/meta-freedesktop-mime

The freedesktop.org shared-mime-info database as static metadata for Node.js.

## Why this source

[shared-mime-info](https://gitlab.freedesktop.org/xdg/shared-mime-info) is the
database every Linux desktop uses to decide what a file is. Its specification
lives with freedesktop.org, the home of the XDG conventions, and its data file
ships with GNOME, KDE and every distribution that depends on them.

Its value here is breadth of evidence. Most sources offer one signal; this one
offers five, all of them recorded per media type:

| Signal            | What it says                                         |
| ----------------- | ---------------------------------------------------- |
| `globList`        | Filename patterns, for example `*.png` or `Makefile` |
| `globPatternList` | The same patterns, flattened to strings              |
| `magicList`       | Byte signatures at fixed offsets, nestable           |
| `aliasList`       | Other media types that name the same format          |
| `subClassOfList`  | Media types this one inherits behaviour from         |
| `rootXmlList`     | XML root element signatures                          |

It also records a declared priority on magic rules and a weight on glob
patterns, because two types may claim the same filename. That ordering is part
of the evidence and is preserved rather than resolved.

The database is not a formal standard. It is a de facto convention maintained
in public, and the package presents it as such.

## About the name

`freedesktop` identifies the origin, matching the `apache`, `iana` and `whatwg`
siblings. The project itself is called `shared-mime-info`, but the suffix
`-info` names the project, not the data, and repeating `mime` twice in a package
name helps nobody. `mime` alone is the term the surrounding ecosystem uses.

## Install

```bash
npm install @produck/meta-freedesktop-mime
```

## Usage

The package root exports the snapshot provenance and the `data` namespace:

```js
import { source, data } from '@produck/meta-freedesktop-mime';

source.commit; // commit the snapshot was taken from
source.snapshot; // permanent raw URL of that file
source.digest; // SHA-256 of the document in docs/reference.xml
```

Every entry of `data` is keyed by its full media type, `type/subtype`, and
carries the whole record:

```js
data['image/png'].globList;
// [{ pattern: '*.png', weight: null, caseSensitive: false }]

data['text/javascript'].globList; // *.cjs, *.js, *.jsm, *.mjs
data['application/xml'].subClassOfList; // ['text/plain']
data['video/vnd.avi'].magicList[0].matchList[0].matchList[0].value; // 'AVI '
```

The package ships **no aggregated index, no reverse lookup and no resolver**.
Turning globs into an extension index, or matching magic against a buffer, is
the consumer's job.

## Data shape

```ts
interface Source {
  project: string;
  url: string;
  snapshot: string;
  commit: string;
  collected: string;
  digest: string;
}
```

Every record exports the same eleven fields, in the order the source presents
them:

| Export            | Type                 |
| ----------------- | -------------------- |
| `mediaType`       | `string`             |
| `commentList`     | `string[]`           |
| `acronym`         | `string \| null`     |
| `expandedAcronym` | `string \| null`     |
| `genericIconName` | `string \| null`     |
| `aliasList`       | `(string \| null)[]` |
| `subClassOfList`  | `(string \| null)[]` |
| `globList`        | `Glob[]`             |
| `globPatternList` | `string[]`           |
| `magicList`       | `Magic[]`            |
| `treeMagicList`   | `TreeMagic[]`        |
| `rootXmlList`     | `RootXml[]`          |

`globPatternList` repeats the `pattern` field of `globList` as a flat string
array. The duplication is deliberate: a bundler can fold a flat list of string
literals into a single constant, but it cannot do the same for an array of
objects, so a consumer that only needs the patterns pays for the whole `Glob`
shape if it walks `globList`. The list is always present, empty when there is no
glob, so the export surface does not vary by record. It mirrors `globList`
positionally and does not deduplicate.

Nested shapes:

```ts
interface Glob {
  pattern: string;
  weight: number | null;
  caseSensitive: boolean;
}

interface Match {
  type: string | null;
  value: string | null;
  offset: string | null;
  mask: string | null;
  matchList: Match[];
}

interface Magic {
  priority: number | null;
  matchList: Match[];
}

interface TreeMatch {
  type: string | null;
  path: string | null;
  matchCase: boolean;
  matchList: TreeMatch[];
}

interface TreeMagic {
  priority: number | null;
  delete: boolean;
  treeMatchList: TreeMatch[];
}

interface RootXml {
  type: string | null;
  namespaceURI: string | null;
  localName: string | null;
}
```

Three details are deliberate:

- `offset` stays a string because the source writes both `'8'` and `'100:256'`.
  Parsing it here would discard the range form.
- Magic values keep their exact bytes, including trailing spaces. `'AVI '` is
  four characters, and that matters to a matcher.
- Absent attributes become `null`, never `0` or `''`, so a reader can tell a
  missing weight from a declared zero.

### Files

- `src/index.mjs` — the `source` snapshot provenance.
- `src/data/index.mjs` — one `export * as '<type>/<subtype>'` per record.
- `src/data/record/<type>/<subtype>.mjs` — one record each.
- `docs/reference.xml` — the exact `freedesktop.org.xml.in` file the data came
  from.
- `docs/commit.txt` — the commit that file was taken from.

`docs/` is not part of the published package. With `sideEffects: false`,
downstream builds can import only the records they use.

## Tree shaking

**Subpath import.** Each record has its own `/<type>/<subtype>` entry. Only the
record you name ends up in the bundle:

```js
import { globList } from '@produck/meta-freedesktop-mime/text/javascript';
```

**Record level, statically.** Import the record modules you need by path:

```js
import * as JS from '@produck/meta-freedesktop-mime/text/javascript';
import * as PNG from '@produck/meta-freedesktop-mime/image/png';

JS.globPatternList; // ['*.cjs', '*.js', '*.jsm', '*.mjs']
PNG.acronym; // 'PNG'
```

**Whole registry.** The root entry re-exports `data`, which re-exports every
record. It is read at runtime, so a bundler cannot tell which entries you use:

```js
import { data } from '@produck/meta-freedesktop-mime';

Object.keys(data); // every type/subtype key
```

## Notes

- The source is `freedesktop.org.xml.in`, a template with an inline DTD. The
  snapshot is stored verbatim; only the elements are read, never the DTD.
- 1063 media types are recorded. A type with no glob and no magic still gets a
  record, because the absence of evidence is itself a fact.
- Several types may claim the same pattern; `weight` orders them, and the
  higher weight wins. The package does not pre-resolve those collisions.
- This package does not merge with the IANA, WHATWG or Apache packages. It is
  an independent source; combining them is the consumer's decision.

## From globs to extensions

`globList` holds filename patterns, not file extensions. The two are different
questions, and the source answers only the first one. Converting is the
consumer's job, and it is not a single regular expression.

The 1479 patterns fall into three groups, and only the first converts cleanly:

| Group    | Count | Example      | Meaning                      |
| -------- | ----- | ------------ | ---------------------------- |
| simple   | 1365  | `*.png`      | one extension, `png`         |
| compound | 62    | `*.tar.gz`   | a compound suffix, ambiguous |
| named    | 52    | `Dockerfile` | a filename, not an extension |

### simple

`*.<ext>` with no further dot. Strip the leading `*.` and the result is the
extension. This is the only group where that operation is well defined.

### compound

`*.<a>.<b>` and similar. The pattern says the file name ends with `.tar.gz`; it
does not say which part is the extension. Both readings are defensible, and
they disagree:

- Taking the last segment turns `*.spdx.json` into `json`, which then collides
  with `application/json`.
- Taking the whole suffix turns it into `tar.gz`, which most extension APIs
  cannot express, since they split on the last dot.

There is no correct answer here, only a policy. Dropping compound patterns is
the conservative choice; keeping the whole suffix preserves more information
but needs callers that understand compound extensions. Either way the decision
belongs in the consumer, not in this package.

### named

No leading `*.` at all: fixed filenames like `Makefile` and `pom.xml`, prefix
patterns like `bzImage*`, and suffix patterns like `*~` and `*.[1-9]`. None of
these are extensions. Adding them to an extension map produces keys that no
file lookup will ever ask for.

### Precedence

Among patterns that do convert, a single extension may be claimed by more than
one media type. `weight` records which claim is stronger, and a missing weight
means the default. This package keeps the claim and the weight side by side and
resolves nothing; a map built without honouring the weight will pick whichever
record happened to be inserted last.

## License

MIT
