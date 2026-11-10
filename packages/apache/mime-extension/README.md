# @produck/meta-apache-mime-extension

Apache httpd `mime.types` file extension mapping as static metadata for Node.js.

## Why this source

No standards body maintains a mapping from media type to file extension.
RFC 6838 states that file extensions are unreliable for determining a media
type, so the IANA registry records no extensions at all.

The Apache httpd project maintains
[`docs/conf/mime.types`](https://github.com/apache/httpd/blob/trunk/docs/conf/mime.types),
which is used far beyond httpd itself. Its header states:

> This file maps Internet media types to unique file extension(s). Although
> created for httpd, this file is used by many software systems and has been
> placed in the public domain for unlimited redistribution.

That combination, a maintained file, wide adoption, and public domain
licensing, is why it is the source here. It is a de facto convention, not a
standard, and the package presents it as such.

## About the name

The source file is called `mime.types`, and the surrounding ecosystem
(`mime-db`, `mime-types`) uses `mime` throughout, so `mime-extension` is the
term most readers recognise. Note what the name does and does not claim: a file
extension is not a property of a MIME type, it is a naming convention that is
paired with one. This package just delivers that pairing as it is written in
the Apache file.

## Install

```bash
npm install @produck/meta-apache-mime-extension
```

## Usage

The package root exports the snapshot provenance and the `data` namespace:

```js
import { source, data } from '@produck/meta-apache-mime-extension';

source.commit; // commit the snapshot was taken from
source.snapshot; // permanent raw URL of that file
source.digest; // SHA-256 of the document in docs/reference.types
```

Every entry of `data` is keyed by its full media type, `type/subtype`, and
contains a single `extensionList` export:

```js
data['text/html'].extensionList; // ['html', 'htm']
data['application/json'].extensionList; // ['json']
data['image/jpeg'].extensionList; // ['jpeg', 'jpg', 'jpe']
```

Extensions carry no leading dot, matching the source file. A record exists only
when the source declares at least one extension, so every entry has a non-empty
list.

The package ships **no aggregated list, no reverse index and no lookup API**.
Building an extension to media type index is the consumer's job.

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

Every record exports exactly one field. The media type itself is the path you
imported from, so repeating it inside the record would be redundant:

| Export          | Type       |
| --------------- | ---------- |
| `extensionList` | `string[]` |

### Files

- `src/index.mjs` — the `source` snapshot provenance.
- `src/data/index.mjs` — one `export * as '<type>/<subtype>'` per record.
- `src/data/record/<type>/<subtype>.mjs` — one record each.
- `docs/reference.types` — the exact `mime.types` file the data came from.
- `docs/commit.txt` — the commit that file was taken from.

`docs/` is not part of the published package.

With `sideEffects: false`, downstream builds can import only the records they
use.

## Tree shaking

**Subpath import.** Each record has its own `/<type>/<subtype>` entry. Only the
record you name ends up in the bundle:

```js
import { extensionList } from '@produck/meta-apache-mime-extension/text/html';
```

**Record level, statically.** Import the record modules you need by path. Each
import is a separate module, so the bundler keeps exactly the records you named:

```js
import * as HTML from '@produck/meta-apache-mime-extension/text/html';
import * as JSON_TYPE from '@produck/meta-apache-mime-extension/application/json';

HTML.extensionList; // ['html', 'htm']
JSON_TYPE.extensionList; // ['json']
```

**Whole registry.** The root entry re-exports `data`, which re-exports every
record. It is read at runtime, so a bundler cannot tell which entries you use:
any enumeration pulls every record into the bundle.

```js
import { data } from '@produck/meta-apache-mime-extension';

Object.keys(data); // every type/subtype key
```

## Notes

- Subpath names follow the source casing exactly. The `mime.types` file is
  lowercase throughout, so `/text/html` is the only valid import path. On case
  insensitive file systems a wrongly cased path silently resolves to the
  nearest existing record instead of failing.
- The source lists some media types only as comments, meaning no unique
  extension. Those produce no record here.
- One media type may carry several extensions. `text/plain` for instance maps
  to `txt`, `text`, `conf`, `def`, `list`, `log` and `in`, which reflects
  long-standing server convention rather than a standard.
- This package does not merge with the IANA or WHATWG packages. It is an
  independent source; combining them is the consumer's decision.

## License

MIT
