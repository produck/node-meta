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

The package ships **no aggregated list, no index and no lookup API**. It only
exposes the records as written in the IANA registry. Building a list, an index,
or a query on top of them is the consumer's job.

Enumerating `data` gives every record module. Pick the fields you need while
building your own table:

```js
import { data } from '@produck/node-meta-iana-charset';

const byName = new Map();

for (const [key, record] of Object.entries(data)) {
  if (!/^mib\d+$/.test(key)) continue;

  byName.set(record.name, {
    mibEnum: record.mibEnum,
    preferredAlias: record.preferredAlias,
    aliasList: record.aliasList,
  });
}

byName.get('UTF-8').mibEnum; // 106
```

Lookups follow the same rule. For example, resolving a charset label through
the registry needs an index you build and own:

```js
const byAlias = new Map();

for (const record of byName.values()) {
  for (const alias of record.aliasList) {
    byAlias.set(alias.toLowerCase(), record);
  }
}

byAlias.get('latin1').mibEnum; // 4
byAlias.get('csutf8').mibEnum; // 106
```

Note that this index lives in your code, not in the package: keeping it out of
the shipped data is what lets the per-record entries stay tree-shakable.

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

Some registrations write their description as a link to an external document,
for example `<description>See <xref type="uri" data="…"/></description>`.
`description` keeps that sentence with the link target inlined as plain text
(`'See https://…'`); the same target also appears in `xrefList`, which stays
the structured form.

### Files

- `src/index.mjs` — the `source` snapshot provenance.
- `src/data/index.mjs` — the `export * as mibN from './record/NNNN.mjs'` list.
- `src/data/record/NNNN.mjs` — one record each; the file name is zero padded
  to four digits while the export name is not.
- `docs/reference.xml` — the exact IANA document the data was generated from.

`docs/reference.xml` is not part of the published package. `source.digest` is
the SHA-256 of that file, so a release can be traced back to the exact upstream
document it was built from.

With `sideEffects: false`, downstream builds can import only the namespaces
they use.

## Tree shaking

There are three ways to read the data, and they shake differently.

**Field level.** Each record has its own `/mib/<mibEnum>` entry, exporting the
fields separately. Only the fields you import end up in the bundle:

```js
import { name, mibEnum } from '@produck/node-meta-iana-charset/mib/106';
```

**Record level, statically.** Import the record namespaces you need by path.
Each import is a separate module, so the bundler keeps exactly the records you
named and drops the other 257:

```js
import * as MIB_106 from '@produck/node-meta-iana-charset/mib/106';
import * as MIB_13 from '@produck/node-meta-iana-charset/mib/13';

MIB_106.name; // UTF-8
MIB_13.name; // ISO-8859-10
```

**Whole registry.** The root entry re-exports `data`, and `/data` exports every
record as a namespace named `mib<mibEnum>`. Both are read at runtime, so a
bundler cannot tell which entries you use: any enumeration pulls every record
into the bundle.

```js
import { data } from '@produck/node-meta-iana-charset';

Object.keys(data); // every mib entry
```

This holds even when the enumeration happens to read only a few records:

```js
import { mib106 } from '@produck/node-meta-iana-charset/data';
```

`/data` resolves to a single module that re-exports all 258 records, so
importing one name from it still loads all of them. Importing a name from
`/data` is not a tree-shaking boundary; importing a `/mib/<mibEnum>` path is.

Prefer `/mib/<mibEnum>` when the records are known at build time. Use the root
`data` namespace only when you genuinely have to enumerate every registration
at runtime.

### Building a table

A lookup table over the whole registry is a consumer concern. Building one is
the obvious thing to do, and the obvious way is to enumerate the default entry:

```js
import { data } from '@produck/node-meta-iana-charset';

const table = Object.values(data).map((record) => ({
  name: record.name,
  mibEnum: record.mibEnum,
}));
```

This works and stays readable. The cost is a build-size one, not a runtime
one: the dropped fields stay in the bundle, and the module level `data` object
keeps holding them at runtime too. Enumeration is a runtime read, so no bundler
can prove a field unused and no garbage collector can reclaim it. Reach for the
static import list below only when that difference matters to you.

Built the right way, a table costs a fraction of the full registry, because the
bundler can fold every picked field into a literal.

```js
import * as MIB_3 from '@produck/node-meta-iana-charset/mib/3';
import * as MIB_4 from '@produck/node-meta-iana-charset/mib/4';
// ... one static import per record

const RAW = Object.freeze([
  { name: MIB_3.name, mibEnum: MIB_3.mibEnum, aliasList: MIB_3.aliasList },
  { name: MIB_4.name, mibEnum: MIB_4.mibEnum, aliasList: MIB_4.aliasList },
  // ... one entry per record
]);

function normalize(raw) {
  const { name, aliasList } = raw;

  return {
    name,
    mibEnum: raw.mibEnum,
    aliasList: aliasList.includes(name) ? [...aliasList] : [name, ...aliasList],
  };
}

const TABLE = Object.freeze(RAW.map(normalize));
```

Three properties make this foldable:

- **Static member access only.** `MIB_3.name` is foldable. Destructuring,
  `MIB_3['name']` and any call in between are not.
- **Pick first, normalize once.** Choosing fields stays a flat literal list;
  every edge-case rule (defaulting an alias, merging lists) lives in a single
  pass over the whole table instead of being repeated per record.
- **Symbol keys for the table.** Defining the field keys as `Symbol` once and
  using them as computed keys keeps the key name out of all 258 entries.

> **Measured with `rollup@4` plus `@rollup/plugin-terser`:** the table above
> lands around 22 KB (≈6 KB gzipped), while the same registry read through the
> root `data` namespace cannot be shaken at all. Numbers move with bundler
> versions and options; treat them as an order of magnitude, not a guarantee.

Picking fields is a one-way operation. If your table keeps four of the seven
fields, `description`, `date` and `xrefList` are gone from the build and cannot
be recovered at runtime. That is the intended trade-off, so decide the field
set before you generate the table.

## Common charsets

Registration names and MIBenum values for the charsets most code deals with.
`/mib/<mibEnum>` is the import path for a single record.

| MIBenum | Name                                            | Preferred alias |
| ------- | ----------------------------------------------- | --------------- |
| 3       | `US-ASCII`                                      | `US-ASCII`      |
| 4       | `ISO_8859-1:1987`                               | `ISO-8859-1`    |
| 5       | `ISO_8859-2:1987`                               | `ISO-8859-2`    |
| 6       | `ISO_8859-3:1988`                               | `ISO-8859-3`    |
| 7       | `ISO_8859-4:1988`                               | `ISO-8859-4`    |
| 8       | `ISO_8859-5:1988`                               | `ISO-8859-5`    |
| 9       | `ISO_8859-6:1987`                               | `ISO-8859-6`    |
| 10      | `ISO_8859-7:1987`                               | `ISO-8859-7`    |
| 11      | `ISO_8859-8:1988`                               | `ISO-8859-8`    |
| 12      | `ISO_8859-9:1989`                               | `ISO-8859-9`    |
| 13      | `ISO-8859-10`                                   | `ISO-8859-10`   |
| 17      | `Shift_JIS`                                     | `Shift_JIS`     |
| 18      | `Extended_UNIX_Code_Packed_Format_for_Japanese` | `EUC-JP`        |
| 38      | `EUC-KR`                                        | `EUC-KR`        |
| 39      | `ISO-2022-JP`                                   | `ISO-2022-JP`   |
| 106     | `UTF-8`                                         | none            |
| 113     | `GBK`                                           | none            |
| 114     | `GB18030`                                       | none            |
| 1013    | `UTF-16BE`                                      | none            |
| 1014    | `UTF-16LE`                                      | none            |
| 1015    | `UTF-16`                                        | none            |
| 1017    | `UTF-32`                                        | none            |
| 2025    | `GB2312`                                        | `GB2312`        |
| 2026    | `Big5`                                          | `Big5`          |
| 2084    | `KOI8-R`                                        | `KOI8-R`        |
| 2250    | `windows-1250`                                  | none            |
| 2251    | `windows-1251`                                  | none            |
| 2252    | `windows-1252`                                  | none            |
| 2259    | `TIS-620`                                       | none            |

`UTF-8`, `UTF-16`, `UTF-16BE`, `UTF-16LE`, `UTF-32` and the `windows-*` entries
register no preferred alias, so use the registration name to look them up.

## Notes

- Alias coverage follows the IANA registry. Labels from the WHATWG Encoding
  Standard (for example `x-user-defined`) are not included and the two sets
  are not interchangeable.

## License

MIT
