import fs from 'node:fs';
import path from 'node:path';
import { createHash } from 'node:crypto';
import { fileURLToPath } from 'node:url';

const HERE = path.dirname(fileURLToPath(import.meta.url));
const PACKAGE_ROOT = path.resolve(HERE, '..');
const REFERENCE = path.join(PACKAGE_ROOT, 'docs', 'reference.html');
const COMMIT_FILE = path.join(PACKAGE_ROOT, 'docs', 'commit.txt');
const TARGET = path.join(PACKAGE_ROOT, 'src', 'index.mjs');
const DATA_INDEX = path.join(PACKAGE_ROOT, 'src', 'data', 'index.mjs');
const DATA_DIR = path.join(PACKAGE_ROOT, 'src', 'data', 'record');
const RECORD_TYPES = path.join(PACKAGE_ROOT, 'src', 'data', 'record.d.mts');
const DATA_TYPES = path.join(PACKAGE_ROOT, 'src', 'data', 'index.d.mts');
const MANIFEST = path.join(PACKAGE_ROOT, 'package.json');

const MIME_PATTERN = /^[a-z0-9!#$&^_.+-]+\/[a-z0-9!#$&^_.+-]+$/i;

const SECTION_PATTERN =
  /^(mime-type|matching-a|determining|context-specific|identifying|sniffing)/;

function literal(value) {
  if (value === null) {
    return 'null';
  }
  if (typeof value === 'number' || typeof value === 'boolean') {
    return String(value);
  }

  const body = value
    .replace(/\\/g, '\\\\')
    .replace(/'/g, '\\\'')
    .replace(/\n/g, '\\n');

  return `'${body}'`;
}

function toPropertyName(value) {
  if (/^[A-Za-z_$][A-Za-z0-9_$]*$/.test(value)) {
    return value;
  }

  return `'${value}'`;
}

function readSectionList(html) {
  const headingList = [
    ...html.matchAll(/<h([2-4])[^>]*id="([^"]+)"[^>]*>([\s\S]*?)<\/h\1>/g),
  ];

  return headingList.map((heading, index) => {
    const next = headingList[index + 1];
    const start = heading.index;
    const end = next === undefined ? html.length : next.index;

    return {
      id: heading[2],
      title: heading[3].replace(/<[^>]*>/g, '').trim(),
      body: html.slice(start, end),
    };
  });
}

function readCodeList(body) {
  return [
    ...new Set(
      [...body.matchAll(/<code>([^<]+)<\/code>/g)]
        .map((match) => match[1].trim())
        .filter((value) => MIME_PATTERN.test(value)),
    ),
  ];
}

function readTableCellList(body) {
  const typeList = [];

  for (const row of body.matchAll(/<tr>([\s\S]*?)<\/tr>/g)) {
    for (const cell of row[1].matchAll(/<td>([\s\S]*?)<\/td>/g)) {
      const value = cell[1].replace(/<[^>]*>/g, '').trim();

      if (MIME_PATTERN.test(value)) {
        typeList.push(value);
      }
    }
  }

  return [...new Set(typeList)];
}

function extract(html) {
  const entryMap = new Map();

  for (const section of readSectionList(html)) {
    if (!SECTION_PATTERN.test(section.id)) {
      continue;
    }

    for (const mediaType of readCodeList(section.body)) {
      if (!entryMap.has(mediaType)) {
        entryMap.set(mediaType, { mediaType, section: section.id });
      }
    }

    for (const mediaType of readTableCellList(section.body)) {
      if (!entryMap.has(mediaType)) {
        entryMap.set(mediaType, { mediaType, section: section.id });
      }
    }
  }

  return [...entryMap.values()].sort((left, right) =>
    left.mediaType.localeCompare(right.mediaType),
  );
}

function readFileName(mediaType) {
  return `${mediaType.replace('/', '/')}.mjs`;
}

function renderRecord(entry) {
  const [type, subtype] = entry.mediaType.split('/');

  return [
    `export const type = ${literal(type)};`,
    '',
    `export const subtype = ${literal(subtype)};`,
    '',
    `export const mediaType = ${literal(entry.mediaType)};`,
    '',
    `export const section = ${literal(entry.section)};`,
    '',
  ].join('\n');
}

function renderDataIndex(entryList) {
  return (
    entryList
      .map(({ mediaType }) => {
        const [type, subtype] = mediaType.split('/');

        return `export * as ${toPropertyName(mediaType)} from './record/${type}/${readFileName(subtype)}';`;
      })
      .join('\n') + '\n'
  );
}

function renderDataTypes(entryList) {
  const lineList = ['interface RecordMap {'];

  for (const { mediaType } of entryList) {
    lineList.push(`  ${JSON.stringify(mediaType)}: RecordModule;`);
  }

  lineList.push(
    '}',
    '',
    'declare const recordMap: RecordMap;',
    '',
    'export = recordMap;',
    '',
  );

  return [
    'import type { RecordModule } from \'../record.d.mts\';',
    '',
    ...lineList,
  ].join('\n');
}

function renderRecordTypes() {
  return [
    '/** Top-level type, for example `application`. */',
    'export declare const type: string;',
    '',
    '/** Subtype without the top-level prefix, for example `json`. */',
    'export declare const subtype: string;',
    '',
    '/** Full media type, for example `application/json`. */',
    'export declare const mediaType: string;',
    '',
    '/** Identifier of the specification section that lists this media type. */',
    'export declare const section: string;',
    '',
  ].join('\n');
}

function renderSource(source) {
  const fieldList = [
    `  standard: ${literal('mimesniff')},`,
    `  url: ${literal('https://mimesniff.spec.whatwg.org/')},`,
    `  snapshot: ${literal(source.snapshot)},`,
    `  commit: ${literal(source.commit)},`,
    `  updated: ${literal(source.updated)},`,
    `  collected: ${literal(source.collected)},`,
    `  digest: ${literal(source.digest)},`,
  ];

  return `export const source = {\n${fieldList.join('\n')}\n};\n\nexport * as data from './data/index.mjs';\n`;
}

function renderManifest(manifest) {
  const exportMap = {
    '.': {
      types: './src/index.d.mts',
      import: './src/index.mjs',
    },
    './data': {
      types: './src/data/index.d.mts',
      import: './src/data/index.mjs',
    },
    './*': {
      types: './src/data/record.d.mts',
      import: './src/data/record/*.mjs',
    },
  };

  return `${JSON.stringify({ ...manifest, exports: exportMap }, null, 2)}\n`;
}

const html = fs.readFileSync(REFERENCE, 'utf8');
const commit = fs.readFileSync(COMMIT_FILE, 'utf8').trim();
const entryList = extract(html);
const typeSet = new Set(
  entryList.map((entry) => entry.mediaType.split('/')[0]),
);
const source = {
  snapshot: `https://mimesniff.spec.whatwg.org/commit-snapshots/${commit}/`,
  commit,
  updated: html.match(/datetime="(\d{4}-\d{2}-\d{2})"/)?.[1] ?? null,
  collected: new Date().toISOString(),
  digest: createHash('sha256').update(html).digest('hex'),
};

fs.rmSync(DATA_DIR, { recursive: true, force: true });
fs.mkdirSync(DATA_DIR, { recursive: true });

for (const entry of entryList) {
  const [type, subtype] = entry.mediaType.split('/');
  const typeDir = path.join(DATA_DIR, type);

  fs.mkdirSync(typeDir, { recursive: true });
  fs.writeFileSync(path.join(typeDir, `${subtype}.mjs`), renderRecord(entry));
}

fs.writeFileSync(DATA_INDEX, renderDataIndex(entryList));
fs.writeFileSync(DATA_TYPES, renderDataTypes(entryList));
fs.writeFileSync(RECORD_TYPES, renderRecordTypes());
fs.writeFileSync(TARGET, renderSource(source));
fs.writeFileSync(
  MANIFEST,
  renderManifest(JSON.parse(fs.readFileSync(MANIFEST, 'utf8'))),
);

console.log(
  `records ${entryList.length} types ${typeSet.size} commit ${commit.slice(0, 8)}`,
);
