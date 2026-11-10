import fs from 'node:fs';
import path from 'node:path';
import { createHash } from 'node:crypto';
import { fileURLToPath } from 'node:url';

const REPOSITORY = 'apache/httpd';
const FILE_PATH = 'docs/conf/mime.types';
const COMMIT_API = `https://api.github.com/repos/${REPOSITORY}/commits?path=${FILE_PATH}&per_page=1`;
const RAW_BASE = `https://raw.githubusercontent.com/${REPOSITORY}`;

const HERE = path.dirname(fileURLToPath(import.meta.url));
const PACKAGE_ROOT = path.resolve(HERE, '..');
const REFERENCE = path.join(PACKAGE_ROOT, 'docs', 'reference.types');
const COMMIT_FILE = path.join(PACKAGE_ROOT, 'docs', 'commit.txt');
const TARGET = path.join(PACKAGE_ROOT, 'src', 'index.mjs');
const DATA_INDEX = path.join(PACKAGE_ROOT, 'src', 'data', 'index.mjs');
const DATA_DIR = path.join(PACKAGE_ROOT, 'src', 'data', 'record');
const RECORD_TYPES = path.join(PACKAGE_ROOT, 'src', 'data', 'record.d.mts');
const DATA_TYPES = path.join(PACKAGE_ROOT, 'src', 'data', 'index.d.mts');
const MANIFEST = path.join(PACKAGE_ROOT, 'package.json');

const MIME_PATTERN = /^[a-z0-9!#$&^_.+-]+\/[a-z0-9!#$&^_.+-]+$/i;
const EXTENSION_PATTERN = /^[A-Za-z0-9][A-Za-z0-9._+-]*$/;

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

function parseEntryList(text) {
  const entryMap = new Map();

  for (const rawLine of text.split('\n')) {
    const line = rawLine.trim();

    if (line === '' || line.startsWith('=')) {
      continue;
    }
    if (line.startsWith('#') && line.replace(/^#+\s*/, '') === '') {
      continue;
    }

    const enabled = !line.startsWith('#');
    const body = enabled ? line : line.replace(/^#+\s*/, '');
    const [mediaType, ...extensionList] = body.split(/\s+/);

    if (!MIME_PATTERN.test(mediaType)) {
      continue;
    }

    const extensionOf = extensionList.filter((item) =>
      EXTENSION_PATTERN.test(item),
    );

    if (!entryMap.has(mediaType)) {
      entryMap.set(mediaType, {
        mediaType,
        extensionList: [],
        declared: enabled,
      });
    }

    const entry = entryMap.get(mediaType);

    if (enabled) {
      entry.declared = true;
    }

    for (const extension of extensionOf) {
      if (!entry.extensionList.includes(extension)) {
        entry.extensionList.push(extension);
      }
    }
  }

  return [...entryMap.values()]
    .filter((entry) => entry.extensionList.length > 0)
    .sort((left, right) => left.mediaType.localeCompare(right.mediaType));
}

function readFileName(mediaType) {
  return `${mediaType.slice(mediaType.indexOf('/') + 1)}.mjs`;
}

function renderRecord(entry) {
  const extensionText = entry.extensionList
    .map((extension) => `  ${literal(extension)},`)
    .join('\n');

  return ['export const extensionList = [', extensionText, '];', ''].join('\n');
}

function renderDataIndex(entryList) {
  return (
    entryList
      .map(({ mediaType }) => {
        const [type] = mediaType.split('/');

        return `export * as ${toPropertyName(mediaType)} from './record/${type}/${readFileName(mediaType)}';`;
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
    '/** File extensions declared for this media type, without the leading dot. */',
    'export declare const extensionList: string[];',
    '',
  ].join('\n');
}

function renderSource(source) {
  const fieldList = [
    `  project: ${literal('apache-httpd')},`,
    `  url: ${literal(source.url)},`,
    `  snapshot: ${literal(source.snapshot)},`,
    `  commit: ${literal(source.commit)},`,
    `  collected: ${literal(source.collected)},`,
    `  digest: ${literal(source.digest)},`,
  ];

  return `export const source = {\n${fieldList.join('\n')}\n};\n\nexport * as data from './data/index.mjs';\n`;
}

function renderManifest(manifest, entryList) {
  const exportMap = {
    '.': {
      types: './src/index.d.mts',
      import: './src/index.mjs',
    },
    './data': {
      types: './src/data/index.d.mts',
      import: './src/data/index.mjs',
    },
  };

  for (const { mediaType } of entryList) {
    const [type] = mediaType.split('/');

    exportMap[`./${mediaType}`] = {
      types: './src/data/record.d.mts',
      import: `./src/data/record/${type}/${readFileName(mediaType)}`,
    };
  }

  return `${JSON.stringify(
    { ...manifest, exports: sortKeys(exportMap) },
    null,
    2,
  )}\n`;
}

function sortKeys(value) {
  const sorted = {};

  for (const key of Object.keys(value).sort()) {
    sorted[key] = value[key];
  }

  return sorted;
}

async function fetchText(url) {
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(`Failed to fetch ${url}: ${response.status}`);
  }

  return response.text();
}

const commit = fs.existsSync(COMMIT_FILE)
  ? fs.readFileSync(COMMIT_FILE, 'utf8').trim()
  : await fetchLatestCommit();
const text = fs.existsSync(REFERENCE)
  ? fs.readFileSync(REFERENCE, 'utf8')
  : await fetchText(`${RAW_BASE}/${commit}/${FILE_PATH}`);

if (!fs.existsSync(COMMIT_FILE)) {
  fs.writeFileSync(COMMIT_FILE, `${commit}\n`);
}

if (!fs.existsSync(REFERENCE)) {
  fs.writeFileSync(REFERENCE, text);
}

const entryList = parseEntryList(text);
const typeSet = new Set(
  entryList.map((entry) => entry.mediaType.split('/')[0]),
);
const source = {
  url: `https://github.com/${REPOSITORY}/blob/${commit}/${FILE_PATH}`,
  snapshot: `${RAW_BASE}/${commit}/${FILE_PATH}`,
  commit,
  collected: new Date().toISOString(),
  digest: createHash('sha256').update(text).digest('hex'),
};

fs.rmSync(DATA_DIR, { recursive: true, force: true });
fs.mkdirSync(DATA_DIR, { recursive: true });

for (const entry of entryList) {
  const [type] = entry.mediaType.split('/');
  const typeDir = path.join(DATA_DIR, type);

  fs.mkdirSync(typeDir, { recursive: true });
  fs.writeFileSync(
    path.join(typeDir, readFileName(entry.mediaType)),
    renderRecord(entry),
  );
}

fs.writeFileSync(DATA_INDEX, renderDataIndex(entryList));
fs.writeFileSync(DATA_TYPES, renderDataTypes(entryList));
fs.writeFileSync(RECORD_TYPES, renderRecordTypes());
fs.writeFileSync(TARGET, renderSource(source));
fs.writeFileSync(
  MANIFEST,
  renderManifest(JSON.parse(fs.readFileSync(MANIFEST, 'utf8')), entryList),
);

console.log(
  `records ${entryList.length} types ${typeSet.size} commit ${commit.slice(0, 8)}`,
);

async function fetchLatestCommit() {
  const body = await fetchText(COMMIT_API);
  const [latest] = JSON.parse(body);

  if (latest === undefined || typeof latest.sha !== 'string') {
    throw new Error('Unable to read the latest commit.');
  }

  return latest.sha;
}
