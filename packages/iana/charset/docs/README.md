# Reference snapshot

`reference.xml` is the exact document `scripts/sync.mjs` parses. It is the only
input of the generator: the script reads this file, never the network, unless
the file is missing.

- Source: <https://www.iana.org/assignments/character-sets/character-sets.xml>
- Registry updated: 2026-10-02
- Collected: 2026-11-09T15:53:25.354Z
- Size: 111306 bytes
- SHA-256:
  `a64184cd76a209d9873d54720165da09c3f910ec5ec68025377a95b5ff85662b`

The digest is also recorded in `src/index.mjs` as `source.digest`, so a release
can be traced back to this file.

## Workflow

- Regenerate from this snapshot: `npm exec -- node scripts/sync.mjs`, or
  `npm run sync`. The run is offline and reproducible.
- Refresh the snapshot from IANA: delete `reference.xml` and run the same
  command. The script downloads the document, writes it here, and regenerates
  every record from it.
- Review the snapshot diff before committing a refresh: it is the authoritative
  record of what changed upstream.
