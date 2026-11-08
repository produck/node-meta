# @produck/node-meta-iana-charset

IANA Character Sets registry as static metadata for Node.js.

## Install

```bash
npm install @produck/node-meta-iana-charset
```

## Usage

The package root exports the snapshot provenance and the `data` namespace:

```js
import { source, data } from '@produck/node-meta-iana-charset';

source.url; // registry URL the snapshot was collected from
source.updated; // exact collection time, ISO 8601
source.digest; // SHA-256 of the downloaded document
```

Every entry of `data` is a namespace named after its `mibEnum`, without zero
padding:

```js
data.mib106.name; // UTF-8
data.mib106.aliasList; // ['csUTF8']
data.mib106.description; // short description from the registry
data.mib106.xrefList; // [{ type: 'rfc', data: 'rfc3629' }]
```

The package ships no aggregated list; build one yourself when needed:

```js
const recordList = Object.entries(data)
  .filter(([name]) => /^mib\d+$/.test(name))
  .map(([, namespace]) => namespace)
  .sort((left, right) => left.mibEnum - right.mibEnum);
```

## Data shape

```ts
interface Source {
  url: string;
  updated: string;
  digest: string;
}

interface Xref {
  type: string; // rfc / person / uri / registry
  data: string;
}
```

Every namespace exports each field by name, with no aggregate object:

| Export           | Type             |
| ---------------- | ---------------- |
| `name`           | `string`         |
| `mibEnum`        | `number`         |
| `preferredAlias` | `string \| null` |
| `aliasList`      | `string[]`       |
| `date`           | `string \| null` |
| `description`    | `string`         |
| `xrefList`       | `Xref[]`         |

Downstream code may enumerate the namespaces directly, no wrapping needed.

### Files

- `src/index.mjs` — the `source` snapshot provenance.
- `src/data/index.mjs` — the `export * as mibN from './record/NNNN.mjs'` list.
- `src/data/record/NNNN.mjs` — one record each; the file name is zero padded
  to four digits while the export name is not.

With `sideEffects: false`, downstream builds can import only the namespaces
they use.

## Update

```bash
npm run sync
```

The script fetches `character-sets.xml` and rewrites every record under
`src/data/record/`, together with `src/data/index.mjs` and `src/index.mjs`.
It caches: an existing `tmp/character-sets.xml` is reused, delete that file to
force a fresh download.

## Notes

- This package only provides **registry facts**. It does not decide whether a
  media type accepts a `charset` parameter: `application/json` must not carry
  one while `application/xml` may, and that rule belongs to the RFCs, not here.
- Alias coverage follows the IANA registry. Labels from the WHATWG Encoding
  Standard (for example `x-user-defined`) are not included and the two sets
  are not interchangeable.

## License

MIT
