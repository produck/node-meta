import fs from 'node:fs';
import path from 'node:path';
import { createHash } from 'node:crypto';
import { fileURLToPath } from 'node:url';

import { XMLParser } from 'fast-xml-parser';

const SOURCE_URL =
  'https://www.iana.org/assignments/media-types/media-types.xml';

const HERE = path.dirname(fileURLToPath(import.meta.url));
const PACKAGE_ROOT = path.resolve(HERE, '..');
const TARGET = path.join(PACKAGE_ROOT, 'src', 'index.mjs');
const DATA_INDEX = path.join(PACKAGE_ROOT, 'src', 'data', 'index.mjs');
const DATA_DIR = path.join(PACKAGE_ROOT, 'src', 'data', 'record');
const XREF_INDEX = path.join(PACKAGE_ROOT, 'src', 'data', 'xref', 'index.mjs');
const XREF_DIR = path.join(PACKAGE_ROOT, 'src', 'data', 'xref');
const REFERENCE = path.join(PACKAGE_ROOT, 'docs', 'reference.xml');

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
  const registry = document.registry;

  if (registry === undefined || registry['@_id'] !== 'media-types') {
    throw new Error('The IANA media types registry is missing.');
  }

  return registry;
}

function readFileOf(record) {
  const file = record.file;

  if (file === undefined || typeof file !== 'object') {
    throw new Error(`Record without a file element: ${readText(record.name)}`);
  }

  return {
    mediaType: String(file['@_name'] ?? file['#text'] ?? ''),
    ownerType: readText(file),
  };
}

function readRecord(type, record) {
  return {
    type,
    name: readText(record.name),
    file: readFileOf(record),
    xrefList: readXrefList(record.xref),
    date: record['@_date'] === undefined ? null : String(record['@_date']),
    updated:
      record['@_updated'] === undefined ? null : String(record['@_updated']),
  };
}

function readRecordList(registry) {
  const recordList = [];

  for (const subRegistry of toArray(registry.registry)) {
    const type = String(subRegistry['@_id'] ?? '');

    for (const record of toArray(subRegistry.record)) {
      if (record['@_id'] === undefined && record.name === undefined) {
        continue;
      }

      recordList.push(readRecord(type, record));
    }
  }

  return recordList;
}

function readSource(xml) {
  return {
    url: SOURCE_URL,
    updated: new Date().toISOString(),
    digest: createHash('sha256').update(xml).digest('hex'),
  };
}

function build(xml) {
  const document = readDocument(xml);
  const registry = findRegistry(document);

  return {
    source: readSource(xml),
    recordList: readRecordList(registry),
  };
}

function splitMediaType(mediaType) {
  const index = mediaType.indexOf('/');

  if (index < 0) {
    throw new Error(`Malformed media type: ${mediaType}`);
  }

  return {
    type: mediaType.slice(0, index),
    subtype: mediaType.slice(index + 1),
  };
}

function toIdentifier(value, maxLength) {
  const base = value.replace(/[^A-Za-z0-9]+/g, '_').toUpperCase();
  const head = /^[A-Z_]/.test(base) ? base : `_${base}`;

  if (maxLength === undefined || head.length <= maxLength) {
    return head;
  }

  return `${head.slice(0, maxLength)}_${createHash('sha256').update(head).digest('hex').slice(0, 8).toUpperCase()}`;
}

function toNamespace(xrefType) {
  return toIdentifier(xrefType);
}

function toPropertyName(subtype) {
  if (/^[A-Za-z_$][A-Za-z0-9_$]*$/.test(subtype)) {
    return subtype;
  }

  return JSON.stringify(subtype).replace(/"/g, '\'');
}

function buildXrefTable(recordList) {
  const table = new Map();
  const usedName = new Set();

  for (const record of recordList) {
    for (const xref of record.xrefList) {
      const key = `${xref.type}|${xref.data}`;

      if (table.has(key)) {
        continue;
      }

      if (xref.type === 'uri') {
        const name = `_${readDigest(xref.data)}`;

        table.set(key, { type: 'uri', data: xref.data, name });

        continue;
      }

      const base = xref.data === '' ? 'EMPTY' : toIdentifier(xref.data);
      let name = base;
      let index = 2;

      while (usedName.has(`${xref.type}.${name}`)) {
        name = `${base}_${index}`;
        index++;
      }

      usedName.add(`${xref.type}.${name}`);
      table.set(key, { type: xref.type, data: xref.data, name });
    }
  }

  return table;
}

function readDigest(value) {
  return createHash('md5').update(value).digest('hex').slice(0, 8);
}

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

function readFileName(subtype) {
  return `${subtype}.mjs`;
}

function readXrefSymbol(xref, xrefTable) {
  const entry = xrefTable.get(`${xref.type}|${xref.data}`);

  if (entry === undefined) {
    throw new Error(`Unknown xref ${xref.type}|${xref.data}.`);
  }

  if (xref.type === 'uri') {
    return `URI.${entry.name}`;
  }

  return `${toNamespace(entry.type)}.${entry.name}`;
}

function readXrefImport(xref) {
  if (xref.type === 'uri') {
    return 'import * as URI from \'../../xref/uri.mjs\';\n';
  }

  return `import * as ${toNamespace(xref.type)} from '../../xref/${
    xref.type
  }.mjs';\n`;
}

function renderArray(itemList) {
  if (itemList.length === 0) {
    return '[]';
  }

  return `[\n${itemList.map((item) => `  ${item},`).join('\n')}\n]`;
}

function renderRecord(record, xrefTable) {
  const { type, subtype } = splitMediaType(record.file.mediaType);
  const referenceList = record.xrefList.map((xref) =>
    readXrefSymbol(xref, xrefTable),
  );
  const importList = [
    ...new Set(record.xrefList.map((xref) => readXrefImport(xref))),
  ].sort((left, right) => left.localeCompare(right));
  const header = importList.length === 0 ? '' : `${importList.join('')}\n`;
  const fieldList = [
    ['type', literal(type)],
    ['subtype', literal(subtype)],
    ['name', literal(record.name)],
    ['xrefList', renderArray(referenceList)],
    ['date', literal(record.date)],
    ['updated', literal(record.updated)],
  ];

  return (
    header +
    fieldList
      .map(([key, value]) => `export const ${key} = ${value};\n`)
      .join('\n') +
    '\n'
  );
}

function renderAlias(record) {
  const owner = record.file.ownerType;
  const index = owner.lastIndexOf('/');

  if (index < 0) {
    throw new Error(`Malformed media type: ${owner}`);
  }

  return `export * from './${readFileName(owner.slice(index + 1))}';\n`;
}

function renderXrefModule(type, xrefTable) {
  return (
    [...xrefTable.values()]
      .filter((entry) => entry.type === type && entry.data !== undefined)
      .sort((left, right) => left.name.localeCompare(right.name))
      .map(
        (entry) =>
          `export const ${entry.name} = Object.freeze({\n  type: ${literal(
            entry.type,
          )},\n  data: ${literal(entry.data)},\n});\n`,
      )
      .join('\n') + '\n'
  );
}

function renderXrefIndex(xrefTable) {
  return (
    [...new Set([...xrefTable.values()].map((entry) => entry.type))]
      .sort((left, right) => left.localeCompare(right))
      .map(
        (type) => `export * as ${toPropertyName(type)} from './${type}.mjs';`,
      )
      .join('\n') + '\n'
  );
}

function renderTypeIndex(subtypeList) {
  return (
    [...subtypeList]
      .sort((left, right) => left.localeCompare(right))
      .map(
        (subtype) =>
          `export * as ${toPropertyName(subtype)} from './${readFileName(
            subtype,
          )}';`,
      )
      .join('\n') + '\n'
  );
}

function renderDataIndex(typeMap) {
  return (
    [...typeMap.keys()]
      .sort((left, right) => left.localeCompare(right))
      .map((type) => `export * as ${type} from './record/${type}/index.mjs';`)
      .join('\n') + '\n'
  );
}

function renderSource(source) {
  const fieldList = [
    `  url: ${literal(source.url)},`,
    `  updated: ${literal(source.updated)},`,
    `  digest: ${literal(source.digest)},`,
  ];

  return `export const source = {\n${fieldList.join('\n')}\n};\n\nexport * as data from './data/index.mjs';\n`;
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
const { source, recordList } = build(xml);
const xrefTable = buildXrefTable(recordList);
const typeMap = new Map();

fs.rmSync(DATA_DIR, { recursive: true, force: true });
fs.rmSync(XREF_DIR, { recursive: true, force: true });
fs.mkdirSync(DATA_DIR, { recursive: true });
fs.mkdirSync(XREF_DIR, { recursive: true });

for (const record of recordList) {
  const { type, subtype } = splitMediaType(record.file.mediaType);
  const owner = record.file.ownerType;

  if (!typeMap.has(type)) {
    typeMap.set(type, []);
  }

  typeMap.get(type).push(subtype);

  const typeDir = path.join(DATA_DIR, type);

  fs.mkdirSync(typeDir, { recursive: true });
  fs.writeFileSync(
    path.join(typeDir, readFileName(subtype)),
    owner === record.file.mediaType
      ? renderRecord(record, xrefTable)
      : renderAlias(record),
  );
}

for (const [type, subtypeList] of typeMap) {
  fs.writeFileSync(
    path.join(DATA_DIR, type, 'index.mjs'),
    renderTypeIndex(subtypeList),
  );
}

for (const type of new Set(
  [...xrefTable.values()].map((entry) => entry.type),
)) {
  fs.writeFileSync(
    path.join(XREF_DIR, `${type}.mjs`),
    renderXrefModule(type, xrefTable),
  );
}

fs.writeFileSync(XREF_INDEX, renderXrefIndex(xrefTable));
fs.writeFileSync(DATA_INDEX, renderDataIndex(typeMap));
fs.writeFileSync(TARGET, renderSource(source));

console.log(
  `records ${recordList.length} types ${typeMap.size} xref ${xrefTable.size}`,
);
