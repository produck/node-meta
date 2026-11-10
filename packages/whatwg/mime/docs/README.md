# Reference snapshot

`reference.html` is the exact document `scripts/sync.mjs` parses.
`commit.txt` pins the commit the snapshot was built from.

WHATWG publishes a Living Standard with no version numbers, so the snapshot is
addressed by commit instead:

- Standard: <https://mimesniff.spec.whatwg.org/>
- Snapshot: <https://mimesniff.spec.whatwg.org/commit-snapshots/ba4b3c385b9765ddfe4a994e2bb89e0ab96068e2/>
- Commit: `ba4b3c385b9765ddfe4a994e2bb89e0ab96068e2`
- Specification updated: 2026-10-19
- Size: 246663 bytes
- SHA-256:
  `a6b004dc99d7a3a863d1dcbe3b5ef64846723200dbd4c7795aa51078dd5864fa`

`commit-snapshots/<sha>/` is permanent: the document at that URL can never
change, so a release can be traced back to the exact text it was built from.

## Workflow

- Regenerate from this snapshot: `npm run sync`. The run is offline.
- Refresh the snapshot: delete `commit.txt` and `reference.html`, then run
  `npm run fetch` followed by `npm run sync`. `fetch` reads the latest commit
  from the GitHub API, downloads its snapshot, and stores both files.
- Pin a specific commit: write the commit SHA into `commit.txt` yourself, then
  run `npm run fetch` and `npm run sync`.

The commit snapshot and the live standard differ only in page chrome: the
title, logo and the "this is a commit snapshot" banner. The normative content
is identical, which is what makes the pinned snapshot safe to use.
