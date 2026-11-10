# @produck/meta-whatwg-mime

WHATWG MIME Sniffing media types as static metadata for Node.js.

## Why a separate package

The IANA registry and the WHATWG MIME Sniffing standard describe overlapping but
different sets of media types. Neither is a superset of the other.

- `@produck/meta-iana-media-type` reproduces the IANA Media Types registry.
- This package reproduces every media type the WHATWG MIME Sniffing standard
  mentions, whether or not IANA has registered it.

The two packages are independent sources. They are not merged, deduplicated, or
diffed: a media type present in both is present in both, with the provenance of
each package attached to its own record. Choosing a source, or combining them,
is the consumer's decision.

## A note on terminology

IANA and RFC 6838 use the term **media type**. The WHATWG MIME Sniffing
standard uses **MIME type**, and says so deliberately:

> Standards are encouraged to consistently use the term MIME type to avoid
> confusion with the use of media type as described in Media Queries.

This package is named `mime` to follow the standard it reproduces, while the
field names (`type`, `subtype`, `mediaType`) follow the registry vocabulary the
sibling package already uses. The naming difference is a pointer to the source,
not a claim that the data means something else.

## Install

```bash
npm install @produck/meta-whatwg-mime
```

## Usage

The package root exports the snapshot provenance and the `data` namespace:

```js
import { source, data } from '@produck/meta-whatwg-mime';

source.commit; // commit the snapshot was built from
source.snapshot; // permanent URL of that snapshot
source.updated; // date the standard itself was last updated
source.digest; // SHA-256 of the document in docs/reference.html
```

Every entry of `data` is keyed by its full media type, `type/subtype`:

```js
data['video/webm'].mediaType; // 'video/webm'
data['video/webm'].section; // 'matching-an-audio-or-video-type-pattern'
data['text/javascript1.5'].type; // 'text'
data['unknown/unknown'].subtype; // 'unknown'
```

`section` is the id of the specification section that lists the media type, so
every record can be traced to the exact paragraph that introduced it.

The package ships **no aggregated list, no index and no lookup API**. It only
exposes the media types as written in the standard.

## Data shape

```ts
interface Source {
  standard: string;
  url: string;
  snapshot: string;
  commit: string;
  updated: string;
  collected: string;
  digest: string;
}
```

Every record exports each field by name, with no aggregate object:

| Export      | Type     |
| ----------- | -------- |
| `type`      | `string` |
| `subtype`   | `string` |
| `mediaType` | `string` |
| `section`   | `string` |

### Files

- `src/index.mjs` — the `source` snapshot provenance.
- `src/data/index.mjs` — one `export * as '<type>/<subtype>'` per record.
- `src/data/record/<type>/<subtype>.mjs` — one record each.
- `docs/reference.html` — the exact commit snapshot the data was extracted from.
- `docs/commit.txt` — the commit that snapshot corresponds to.

`docs/` is not part of the published package.

With `sideEffects: false`, downstream builds can import only the records they
use.

## Tree shaking

**Field level.** Each record has its own `/<type>/<subtype>` entry, exporting
the fields separately. Only the fields you import end up in the bundle:

```js
import { mediaType, section } from '@produck/meta-whatwg-mime/image/x-icon';
```

**Record level, statically.** Import the record modules you need by path. Each
import is a separate module, so the bundler keeps exactly the records you named:

```js
import * as ICON from '@produck/meta-whatwg-mime/image/x-icon';
import * as WEBM from '@produck/meta-whatwg-mime/video/webm';

ICON.mediaType; // image/x-icon
WEBM.mediaType; // video/webm
```

**Whole registry.** The root entry re-exports `data`, which re-exports every
record. It is read at runtime, so a bundler cannot tell which entries you use:
any enumeration pulls every record into the bundle.

```js
import { data } from '@produck/meta-whatwg-mime';

Object.keys(data); // every type/subtype key
```

## Notes

- Subpath names follow the standard casing exactly. The standard writes its
  media types in lowercase, so `/application/x-javascript` is the only valid
  import path. On case insensitive file systems a wrongly cased path silently
  resolves to the nearest existing record instead of failing.
- `unknown/unknown` and `application/unknown` are listed because the standard
  mentions them. They are sentinel values used by the sniffing algorithm to
  describe an unknown type, not registered media types.
- Historical JavaScript aliases such as `text/javascript1.0` through
  `text/javascript1.5` are included for the same reason: the standard defines
  them as JavaScript MIME types.
- Media types defined by other WHATWG standards, for example
  `text/event-stream` from the HTML Standard, are out of scope here. This
  package covers the MIME Sniffing standard only.

## License

MIT
