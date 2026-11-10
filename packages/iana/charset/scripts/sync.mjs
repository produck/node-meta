import fs from 'node:fs';
import path from 'node:path';
import { createHash } from 'node:crypto';
import { fileURLToPath } from 'node:url';

import { XMLParser } from 'fast-xml-parser';

const SOURCE_URL =
  'https://www.iana.org/assignments/character-sets/character-sets.xml';

const HERE = path.dirname(fileURLToPath(import.meta.url));
const PACKAGE_ROOT = path.resolve(HERE, '..');
const TARGET = path.join(PACKAGE_ROOT, 'src', 'index.mjs');
const DATA_INDEX = path.join(PACKAGE_ROOT, 'src', 'data', 'index.mjs');
const DATA_DIR = path.join(PACKAGE_ROOT, 'src', 'data', 'record');
const XREF_DIR = path.join(PACKAGE_ROOT, 'src', 'data', 'xref');
const REFERENCE = path.join(PACKAGE_ROOT, 'docs', 'reference.xml');
const MANIFEST = path.join(PACKAGE_ROOT, 'package.json');

function toArray(value) {
  if (value === undefined || value === null) {
    return [];
  }

  return Array.isArray(value) ? value : [value];
}

function readText(value) {
  if (value === undefined || value === null) {
    return '';
  }

  if (typeof value === 'string' || typeof value === 'number') {
    return String(value).trim();
  }

  if (typeof value === 'object') {
    return readText(value['#text'] ?? '');
  }

  return '';
}

function readXrefList(value) {
  return toArray(value).map((xref) => ({
    type: String(xref['@_type'] ?? ''),
    data: String(xref['@_data'] ?? ''),
  }));
}

function readDescription(value) {
  if (value === undefined || value === null) {
    return '';
  }

  if (typeof value === 'string' || typeof value === 'number') {
    return String(value).trim();
  }

  if (typeof value !== 'object') {
    return '';
  }

  const text = readText(value['#text'] ?? '');
  const targetList = readXrefList(value.xref).map((xref) => xref.data);
  const suffix = targetList.filter((data) => data.length > 0).join(' ');

  return suffix === '' ? text : `${text} ${suffix}`.trim();
}

function readDocument(xml) {
  const parser = new XMLParser({
    ignoreAttributes: false,
    attributeNamePrefix: '@_',
    textNodeName: '#text',
    trimValues: true,
    parseTagValue: false,
    parseAttributeValue: false,
  });

  return parser.parse(xml);
}

function findRegistry(document) {
  const registryList = toArray(document.registry?.registry);
  const registry = registryList.find(
    (item) => item['@_id'] === 'character-sets-1',
  );

  if (registry === undefined) {
    throw new Error('The IANA character set registry is missing.');
  }

  return registry;
}

function readRecord(record) {
  const aliasList = toArray(record.alias).map((alias) => readText(alias));
  const preferredAlias = readText(record.preferred_alias);

  return {
    name: readText(record.name),
    mibEnum: Number(readText(record.value)),
    preferredAlias: preferredAlias === '' ? null : preferredAlias,
    aliasList: aliasList.filter((alias) => alias.length > 0),
    description: readDescription(record.description),
    xrefList: readXrefList(record.xref),
    date: record['@_date'] === undefined ? null : String(record['@_date']),
  };
}

function readSource(xml) {
  return {
    url: SOURCE_URL,
    updated: new Date().toISOString(),
    digest: createHash('sha256').update(xml).digest('hex'),
  };
}

function buildXrefTable(recordList) {
  const table = new Map();

  for (const record of recordList) {
    for (const xref of record.xrefList) {
      const key = `${xref.type}|${xref.data}`;

      if (table.has(key)) {
        continue;
      }

      table.set(key, { type: xref.type, data: xref.data, name: null });
    }
  }

  const usedName = new Set();

  for (const entry of table.values()) {
    const base = entry.data === '' ? 'EMPTY' : toIdentifier(entry.data);
    let name = base;
    let index = 2;

    while (usedName.has(`${entry.type}.${name}`)) {
      name = `${base}_${index}`;
      index++;
    }

    usedName.add(`${entry.type}.${name}`);
    entry.name = name;
  }

  return table;
}

function toIdentifier(value) {
  const base = value.replace(/[^A-Za-z0-9]+/g, '_').toUpperCase();

  return /^[A-Z_]/.test(base) ? base : `_${base}`;
}

function build(xml) {
  const document = readDocument(xml);
  const registry = findRegistry(document);
  const recordList = toArray(registry.record).map(readRecord);
  recordList.sort((left, right) => left.mibEnum - right.mibEnum);

  return {
    source: readSource(xml),
    recordList,
    xrefTable: buildXrefTable(recordList),
  };
}

function literal(value) {
  return JSON.stringify(value);
}

function readFileName(record) {
  return `${String(record.mibEnum).padStart(4, '0')}.mjs`;
}

function renderXrefName(type, data, xrefTable) {
  const entry = xrefTable.get(`${type}|${data}`);

  if (entry === undefined) {
    throw new Error(`Unknown xref ${type}|${data}.`);
  }

  return entry.name;
}

function renderRecord(record, xrefTable) {
  const referenceList = record.xrefList.map(
    (xref) =>
      `${xref.type.toUpperCase()}.${renderXrefName(
        xref.type,
        xref.data,
        xrefTable,
      )}`,
  );
  const typeList = [...new Set(record.xrefList.map((xref) => xref.type))].sort(
    (left, right) => left.localeCompare(right),
  );
  const importList = typeList.map(
    (type) => `import * as ${type.toUpperCase()} from '../xref/${type}.mjs';\n`,
  );
  const header = importList.length === 0 ? '' : `${importList.join('')}\n`;
  const fieldList = [
    ['description', literal(record.description)],
    ['xrefList', `[${referenceList.join(', ')}]`],
    ['name', literal(record.name)],
    ['mibEnum', record.mibEnum],
    ['preferredAlias', literal(record.preferredAlias)],
    ['aliasList', literal(record.aliasList)],
    ['date', literal(record.date)],
  ];

  return (
    header +
    fieldList
      .map(([key, value]) => `export const ${key} = ${value};\n`)
      .join('\n') +
    '\n'
  );
}

function renderXrefModule(type, xrefTable) {
  const entryList = [...xrefTable.values()]
    .filter((entry) => entry.type === type)
    .sort((left, right) => left.name.localeCompare(right.name));

  return (
    entryList
      .map(
        (entry) =>
          `export const ${entry.name} = Object.freeze({ type: ${literal(
            entry.type,
          )}, data: ${literal(entry.data)} });\n`,
      )
      .join('\n') + '\n'
  );
}

function renderDataIndex(recordList) {
  const exportList = recordList.map(
    (record) =>
      `export * as mib${record.mibEnum} from './record/${readFileName(record)}';`,
  );

  return [...exportList, ''].join('\n');
}

function renderSource(source) {
  const fieldList = [
    `  url: ${literal(source.url)},`,
    `  updated: ${literal(source.updated)},`,
    `  digest: ${literal(source.digest)},`,
  ];

  return `export const source = {\n${fieldList.join('\n')}\n};\n\nexport * as data from './data/index.mjs';\n`;
}

function renderManifest(manifest, recordList) {
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

  for (const record of recordList) {
    exportMap[`./mib/${String(record.mibEnum).padStart(4, '0')}`] = {
      types: './src/data/record.d.mts',
      import: `./src/data/record/${readFileName(record)}`,
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

function readCache() {
  return fs.existsSync(REFERENCE) ? fs.readFileSync(REFERENCE, 'utf8') : null;
}

async function download() {
  const response = await fetch(SOURCE_URL);

  if (!response.ok) {
    throw new Error(`Failed to fetch ${SOURCE_URL}: ${response.status}`);
  }

  const xml = await response.text();

  fs.mkdirSync(path.dirname(REFERENCE), { recursive: true });
  fs.writeFileSync(REFERENCE, xml);

  return xml;
}

const xml = readCache() ?? (await download());
const { source, recordList, xrefTable } = build(xml);

fs.mkdirSync(DATA_DIR, { recursive: true });
fs.mkdirSync(XREF_DIR, { recursive: true });

for (const record of recordList) {
  const file = path.join(DATA_DIR, readFileName(record));

  fs.writeFileSync(file, renderRecord(record, xrefTable));
}

for (const type of new Set([...xrefTable.values()].map((e) => e.type))) {
  fs.writeFileSync(
    path.join(XREF_DIR, `${type}.mjs`),
    renderXrefModule(type, xrefTable),
  );
}

fs.writeFileSync(DATA_INDEX, renderDataIndex(recordList));
fs.writeFileSync(TARGET, renderSource(source));
fs.writeFileSync(
  MANIFEST,
  renderManifest(JSON.parse(fs.readFileSync(MANIFEST, 'utf8')), recordList),
);

console.log(`records ${recordList.length}`);
