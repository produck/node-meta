# Reference snapshot

`reference.xml` is the exact document `scripts/sync.mjs` parses. It is the only
input of the generator: the script reads this file, never the network, unless
the file is missing.

- Source: <https://www.iana.org/assignments/media-types/media-types.xml>
- Registry updated: 2026-11-05
- Size: 618365 bytes
- SHA-256:
  `a952f50788f552c654c39ca0fbc287b1dfaf0bb251ca068780ba804c2bfa09d9`

The digest is also recorded in `src/index.mjs` as `source.digest`, so a release
can be traced back to this file.

## Workflow

- Regenerate from this snapshot: `npm run sync`. The run is offline and
  reproducible.
- Refresh the snapshot from IANA: delete `reference.xml` and run the same
  command. The script downloads the document, writes it here, and regenerates
  every record from it.
- Review the snapshot diff before committing a refresh: it is the authoritative
  record of what changed upstream.
