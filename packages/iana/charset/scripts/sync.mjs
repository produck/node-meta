import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

import { XMLParser } from 'fast-xml-parser';

const SOURCE_URL =
  'https://www.iana.org/assignments/character-sets/character-sets.xml';

const HERE = path.dirname(fileURLToPath(import.meta.url));
const PACKAGE_ROOT = path.resolve(HERE, '..');
const TARGET = path.join(PACKAGE_ROOT, 'src', 'index.mjs');
const DATA_DIR = path.join(PACKAGE_ROOT, 'data');
const CACHE = path.join(PACKAGE_ROOT, 'tmp', 'character-sets.xml');

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
    description: readText(record.description),
    xrefList: readXrefList(record.xref),
    date: record['@_date'] === undefined ? null : String(record['@_date']),
  };
}

function build(xml) {
  const document = readDocument(xml);
  const registry = findRegistry(document);
  const recordList = toArray(registry.record).map(readRecord);
  recordList.sort((left, right) => left.mibEnum - right.mibEnum);

  return recordList;
}

function literal(value) {
  return JSON.stringify(value);
}

function readXrefLiteral(xrefList) {
  const itemList = xrefList.map(
    (xref) => `{ type: ${literal(xref.type)}, data: ${literal(xref.data)} }`,
  );

  return itemList.length === 0 ? '[]' : `[${itemList.join(', ')}]`;
}

function readRecordLiteral(record) {
  const fieldList = [
    `name: ${literal(record.name)}`,
    `mibEnum: ${record.mibEnum}`,
    `preferredAlias: ${literal(record.preferredAlias)}`,
    `aliasList: ${literal(record.aliasList)}`,
    `date: ${literal(record.date)}`,
  ];

  return `  { ${fieldList.join(', ')} },`;
}

function renderRecord(record) {
  return (
    `export const description = ${literal(record.description)};\n\n` +
    `export const xrefList = ${readXrefLiteral(record.xrefList)};\n\n` +
    `export default ${readRecordLiteral(record).trim().replace(/,$/, '')};\n`
  );
}

function renderIndex(recordList) {
  const importList = recordList.map(
    (record) =>
      `import record${record.mibEnum} from '../data/${record.mibEnum}.mjs';`,
  );
  const itemList = recordList.map((record) => `  record${record.mibEnum},`);

  return [
    ...importList,
    '',
    'export const RECORD_LIST = [',
    ...itemList,
    '];',
    '',
  ].join('\n');
}

function readCache() {
  return fs.existsSync(CACHE) ? fs.readFileSync(CACHE, 'utf8') : null;
}

async function download() {
  const response = await fetch(SOURCE_URL);

  if (!response.ok) {
    throw new Error(`Failed to fetch ${SOURCE_URL}: ${response.status}`);
  }

  const xml = await response.text();

  fs.mkdirSync(path.dirname(CACHE), { recursive: true });
  fs.writeFileSync(CACHE, xml);

  return xml;
}

const xml = readCache() ?? (await download());
const recordList = build(xml);

fs.mkdirSync(DATA_DIR, { recursive: true });

for (const record of recordList) {
  const file = path.join(DATA_DIR, `${record.mibEnum}.mjs`);

  fs.writeFileSync(file, renderRecord(record));
}

fs.writeFileSync(TARGET, renderIndex(recordList));

console.log(`records ${recordList.length}`);
