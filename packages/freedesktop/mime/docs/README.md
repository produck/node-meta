# Snapshot

`reference.xml` is the pinned copy of `data/freedesktop.org.xml.in` from the
freedesktop.org shared-mime-info project.

## Provenance

- Project: https://gitlab.freedesktop.org/xdg/shared-mime-info
- File: `data/freedesktop.org.xml.in`
- Commit: see `commit.txt`

## Format

The file is a template, not a plain document. It starts with an inline DTD
declaring the `mime-info` vocabulary, then a `<mime-info>` root holding one
`<mime-type>` element per media type.

Each `<mime-type>` may carry:

- `<comment>` — one or more human readable descriptions.
- `<acronym>` and `<expanded-acronym>` — the short form and what it stands for.
- `<generic-icon>` — the icon name to fall back on.
- `<alias>` — other media types naming the same format.
- `<sub-class-of>` — media types this one inherits from.
- `<glob pattern weight case-sensitive>` — filename patterns.
- `<magic priority>` — byte signatures, each holding nested `<match>` nodes.
- `<treemagic>` — directory listings that identify a format.
- `<root-XML>` — XML root element signatures.

`<match>` carries `type value offset mask`, and nests further `<match>` nodes
that must also hold.

## Regenerating

Run `npm run sync` in this package. It reads `reference.xml` and
`commit.txt`, writes `src/`, and rewrites the `exports` map of `package.json`.

To move to a newer snapshot, replace both files with a newer commit and rerun
the sync script.

The sync script never fetches. Pinning is an explicit act, so the data cannot
drift while nobody is looking.
