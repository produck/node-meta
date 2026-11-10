# @produck/meta-iana-media-type

IANA Media Types registry as static metadata for Node.js.

## Install

```bash
npm install @produck/meta-iana-media-type
```

## Usage

The package root exports the snapshot provenance and the `data` namespace:

```js
import { source, data } from '@produck/meta-iana-media-type';

source.url; // registry URL the snapshot was collected from
source.updated; // exact collection time, ISO 8601
source.digest; // SHA-256 of the document in docs/reference.xml
```

Every entry of `data` is keyed by its full media type, `type/subtype`:

```js
data['application/json'].type; // 'application'
data['application/json'].subtype; // 'json'
data['application/ld+json'].xrefList; // [{ type: 'person', data: 'W3C' }, …]
data['text/html'].date; // registration date, or null
```

The package ships **no aggregated list, no index and no lookup API**. It only
exposes the records as written in the IANA registry. Building a list, an index,
or a query on top of them is the consumer's job.

Enumerating `data` gives every record module. Pick the fields you need while
building your own table:

```js
import { data } from '@produck/meta-iana-media-type';

const bySubtype = new Map();

for (const [mediaType, record] of Object.entries(data)) {
  if (!mediaType.startsWith('application/')) continue;

  bySubtype.set(record.subtype, {
    name: record.name,
    xrefList: record.xrefList,
    date: record.date,
  });
}

bySubtype.get('json').name; // json
```

## Data shape

```ts
interface Source {
  url: string;
  updated: string;
  digest: string;
}

interface Xref {
  type: string; // rfc / person / uri / draft / note / rfc-errata / text
  data: string;
}
```

Every record exports each field by name, with no aggregate object:

| Export     | Type             |
| ---------- | ---------------- |
| `type`     | `string`         |
| `subtype`  | `string`         |
| `name`     | `string`         |
| `xrefList` | `Xref[]`         |
| `date`     | `string \| null` |
| `updated`  | `string \| null` |

`type` and `subtype` are split from the media type, so `application/json`
becomes `type: 'application'` and `subtype: 'json'`, while `application/ld+json`
keeps `subtype: 'ld+json'`.

A few registrations are aliases of an existing one, written in IANA as
`<file name="image/x-emf">image/emf</file>`. Those get their own file that
re-exports the owner record, so `data['image/x-emf']` and `data['image/emf']`
are the same values.

### Files

- `src/index.mjs` — the `source` snapshot provenance.
- `src/data/index.mjs` — one `export * as '<type>/<subtype>'` per record.
- `src/data/record/<type>/<subtype>.mjs` — one record each.
- `src/data/xref/<type>.mjs` — cross references shared by the records.
- `docs/reference.xml` — the exact IANA document the data was generated from.

`docs/reference.xml` is not part of the published package. `source.digest` is
the SHA-256 of that file, so a release can be traced back to the exact upstream
document it was built from.

Cross references are deduplicated: `rfc`, `person`, `draft`, `note`,
`rfc-errata` and `text` entries become named constants, and `uri` entries are
named after an 8 character MD5 prefix of the URL.

With `sideEffects: false`, downstream builds can import only the records they
use.

## Tree shaking

**Field level.** Each record has its own `/<type>/<subtype>` entry, exporting
the fields separately. Only the fields you import end up in the bundle:

```js
import { name, subtype } from '@produck/meta-iana-media-type/application/json';
```

**Record level, statically.** Import the record modules you need by path. Each
import is a separate module, so the bundler keeps exactly the records you named
and drops the other 2382:

```js
import * as JSON_TYPE from '@produck/meta-iana-media-type/application/json';
import * as HTML_TYPE from '@produck/meta-iana-media-type/text/html';

JSON_TYPE.name; // json
HTML_TYPE.name; // html
```

**Whole registry.** The root entry re-exports `data`, which re-exports every
record. It is read at runtime, so a bundler cannot tell which entries you use:
any enumeration pulls every record into the bundle.

```js
import { data } from '@produck/meta-iana-media-type';

Object.keys(data); // every type/subtype key
```

Prefer `/<type>/<subtype>` when the records are known at build time. Use the
`data` namespace only when you genuinely have to enumerate every registration at
runtime.

## Notes

- The registry has no numeric primary key, so records are identified by their
  `type/subtype` pair.
- Subpath names follow the registry casing exactly. 223 subtypes contain upper
  case characters, for example `/application/A2L` or `/text/SGML`. Type and
  subtype are case sensitive: build the import path from the registry value
  instead of lowercasing it. On case insensitive file systems a wrongly cased
  path silently resolves to the nearest existing record instead of failing.
- `example` is an empty sub-registry: any subtype may be used, none is
  registered, so it produces no records.

## License

MIT
