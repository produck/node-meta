import fs from 'node:fs';
import path from 'node:path';
import { createHash } from 'node:crypto';
import { fileURLToPath } from 'node:url';

import { XMLParser } from 'fast-xml-parser';

const SOURCE_URL =
  'https://www.iana.org/assignments/character-sets/character-sets.xml';

const HERE = path.dirname(fileURLToPath(import.meta.url));
const PACKAGE_ROOT = path.resolve(HERE, '..');
const TARGET = path.join(PACKAGE_ROOT, 'src', 'Registry.json');
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

function compareText(left, right) {
  if (left < right) {
    return -1;
  }

  return left > right ? 1 : 0;
}

function build(xml) {
  const document = readDocument(xml);
  const registry = findRegistry(document);
  const recordList = toArray(registry.record).map(readRecord);
  recordList.sort((left, right) => left.mibEnum - right.mibEnum);

  const aliasIndex = {};

  for (const record of recordList) {
    const aliasSet = new Set(record.aliasList);

    aliasSet.add(record.name);

    if (record.preferredAlias !== null) {
      aliasSet.add(record.preferredAlias);
    }

    for (const alias of aliasSet) {
      const key = alias.toLowerCase();

      if (aliasIndex[key] !== undefined) {
        throw new Error(`Duplicate charset alias "${alias}".`);
      }

      aliasIndex[key] = record.mibEnum;
    }
  }

  return {
    source: {
      url: SOURCE_URL,
      updated: readText(document.registry?.updated),
      digest: createHash('sha256').update(xml).digest('hex'),
    },
    recordList,
    aliasIndex: Object.fromEntries(
      Object.entries(aliasIndex).sort(([left], [right]) =>
        compareText(left, right),
      ),
    ),
  };
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
const registry = build(xml);

fs.mkdirSync(path.dirname(TARGET), { recursive: true });
fs.writeFileSync(TARGET, `${JSON.stringify(registry, null, 2)}\n`);

console.log(
  `records ${registry.recordList.length}, ` +
    `aliases ${Object.keys(registry.aliasIndex).length}, ` +
    `updated ${registry.source.updated}`,
);
