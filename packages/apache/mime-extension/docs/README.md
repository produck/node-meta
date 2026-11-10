# Reference snapshot

`reference.types` is the exact `docs/conf/mime.types` file `scripts/sync.mjs`
parses. `commit.txt` pins the commit it was taken from.

- Source: <https://github.com/apache/httpd/blob/trunk/docs/conf/mime.types>
- Commit: `6393e628c004c52e13da3a1dab3a6670f8888e7e`
- Commit date: 2025-11-26
- Size: 61109 bytes
- SHA-256:
  `f0aca42aa6ae1ea0c856e363d45a6abd67b3afe1bd59e64f256c5610fc84505b`

The file is released into the public domain by the Apache httpd project, which
allows redistribution of the raw snapshot inside this repository.

## Format

Each line maps one media type to its extensions, whitespace separated:

```text
text/html                                       html htm
```

A line starting with `#` means the media type has no unique extension. Those
entries produce no record. Short extension-free continuation lines carry no
media type and are skipped.

## Workflow

- Regenerate from this snapshot: `npm run sync`. The run is offline.
- Refresh the snapshot: delete `commit.txt` and `reference.types`, then run
  `npm run sync`. The script reads the latest commit from the GitHub API,
  downloads that revision, and stores both files.
- Pin a specific commit: write the commit SHA into `commit.txt` yourself, then
  run `npm run sync`.

Review the snapshot diff before committing a refresh; it is the authoritative
record of what changed upstream.
