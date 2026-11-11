import fs from 'node:fs';
import path from 'node:path';
import { createHash } from 'node:crypto';
import { fileURLToPath } from 'node:url';

import { XMLParser } from 'fast-xml-parser';

const PROJECT = 'xdg/shared-mime-info';
const FILE_PATH = 'data/freedesktop.org.xml.in';
const RAW_BASE = 'https://gitlab.freedesktop.org/xdg/shared-mime-info/-/raw';

const HERE = path.dirname(fileURLToPath(import.meta.url));
const PACKAGE_ROOT = path.resolve(HERE, '..');
const REFERENCE = path.join(PACKAGE_ROOT, 'docs', 'reference.xml');
const COMMIT_FILE = path.join(PACKAGE_ROOT, 'docs', 'commit.txt');
const TARGET = path.join(PACKAGE_ROOT, 'src', 'index.mjs');
const DATA_INDEX = path.join(PACKAGE_ROOT, 'src', 'data', 'index.mjs');
const DATA_DIR = path.join(PACKAGE_ROOT, 'src', 'data', 'record');
const RECORD_TYPES = path.join(PACKAGE_ROOT, 'src', 'data', 'record.d.mts');
const DATA_TYPES = path.join(PACKAGE_ROOT, 'src', 'data', 'index.d.mts');
const MANIFEST = path.join(PACKAGE_ROOT, 'package.json');

const ARRAY_ELEMENT_SET = new Set([
  'mime-type',
  'comment',
  'acronym',
  'expanded-acronym',
  'alias',
  'sub-class-of',
  'glob',
  'magic',
  'match',
  'root-XML',
  'treemagic',
  'treematch',
  'generic-icon',
]);

function literal(value) {
  if (value === null || value === undefined) {
    return 'null';
  }
  if (typeof value === 'number' || typeof value === 'boolean') {
    return String(value);
  }

  const body = value
    .replace(/\\/g, '\\\\')
    .replace(/'/g, '\\\'')
    .replace(/\n/g, '\\n')
    .replace(/\r/g, '\\r')
    .replace(/\u2028/g, '\\u2028')
    .replace(/\u2029/g, '\\u2029');

  return `'${body}'`;
}

function toPropertyName(value) {
  if (/^[A-Za-z_$][A-Za-z0-9_$]*$/.test(value)) {
    return value;
  }

  return `'${value}'`;
}

function readFileName(mediaType) {
  return `${mediaType.slice(mediaType.indexOf('/') + 1)}.mjs`;
}

function attr(node, name) {
  const value = node[`@${name}`];

  return value === undefined ? null : String(value);
}

function readNumber(node, name) {
  const value = attr(node, name);

  return value === null ? null : Number(value);
}

function toArray(value) {
  if (value === undefined || value === null) {
    return [];
  }

  return Array.isArray(value) ? value : [value];
}

function readGlobList(nodeList) {
  return toArray(nodeList).map((node) => {
    const pattern = attr(node, 'pattern');

    if (pattern === null) {
      throw new Error('glob without a pattern');
    }

    return {
      pattern,
      weight: readNumber(node, 'weight'),
      caseSensitive: attr(node, 'case-sensitive') === 'true',
    };
  });
}

function readMatch(node) {
  const mask = attr(node, 'mask');
  const offset = attr(node, 'offset');

  return {
    type: attr(node, 'type'),
    value: attr(node, 'value'),
    offset: offset === null ? null : offset,
    mask,
    matchList: readMatchList(node.match),
  };
}

function readMatchList(nodeList) {
  return toArray(nodeList).map((node) => readMatch(node));
}

function readMagicList(nodeList) {
  return toArray(nodeList).map((node) => ({
    priority: readNumber(node, 'priority'),
    matchList: readMatchList(node.match),
  }));
}

function readTreeMatch(node) {
  return {
    type: attr(node, 'type'),
    path: attr(node, 'path'),
    matchCase: attr(node, 'match-case') === 'true',
    matchList: readTreeMatchList(node.treematch),
  };
}

function readTreeMatchList(nodeList) {
  return toArray(nodeList).map((node) => readTreeMatch(node));
}

function readTreeMagicList(nodeList) {
  return toArray(nodeList).map((node) => ({
    priority: readNumber(node, 'priority'),
    delete: attr(node, 'delete') === 'true',
    treeMatchList: readTreeMatchList(node.treematch),
  }));
}

function readRootXmlList(nodeList) {
  return toArray(nodeList).map((node) => ({
    type: attr(node, 'type'),
    namespaceURI: attr(node, 'namespaceURI'),
    localName: attr(node, 'localName'),
  }));
}

function readRecord(node) {
  const mediaType = attr(node, 'type');

  if (mediaType === null) {
    throw new Error('mime-type without a type');
  }

  const commentList = toArray(node.comment).map((entry) => String(entry));
  const acronym = toArray(node.acronym)[0];
  const expandedAcronym = toArray(node['expanded-acronym'])[0];
  const genericIcon = toArray(node['generic-icon'])[0];

  return {
    mediaType,
    commentList,
    acronym: acronym === undefined ? null : String(acronym),
    expandedAcronym:
      expandedAcronym === undefined ? null : String(expandedAcronym),
    genericIconName:
      genericIcon === undefined ? null : attr(genericIcon, 'name'),
    aliasList: toArray(node.alias).map((entry) => attr(entry, 'type')),
    subClassOfList: toArray(node['sub-class-of']).map((entry) =>
      attr(entry, 'type'),
    ),
    globList: readGlobList(node.glob),
    magicList: readMagicList(node.magic),
    treeMagicList: readTreeMagicList(node.treemagic),
    rootXmlList: readRootXmlList(node['root-XML']),
  };
}

function renderValue(value, depth) {
  const pad = '  '.repeat(depth);
  const padInner = '  '.repeat(depth + 1);

  if (value === null) {
    return 'null';
  }
  if (typeof value === 'string' || typeof value === 'number') {
    return literal(value);
  }
  if (typeof value === 'boolean') {
    return String(value);
  }
  if (Array.isArray(value)) {
    if (value.length === 0) {
      return '[]';
    }

    const items = value.map(
      (item) => `${padInner}${renderValue(item, depth + 1)}`,
    );

    return `[\n${items.join(',\n')},\n${pad}]`;
  }

  const entries = Object.entries(value);

  if (entries.length === 0) {
    return '{}';
  }

  const lines = entries.map(
    ([key, item]) =>
      `${padInner}${toPropertyName(key)}: ${renderValue(item, depth + 1)},`,
  );

  return `{\n${lines.join('\n')}\n${pad}}`;
}

function renderRecord(record) {
  const { mediaType, ...fieldMap } = record;
  const lineList = Object.entries(fieldMap).map(
    ([key, value]) => `export const ${key} = ${renderValue(value, 0)};`,
  );

  return [
    '/** The media type this record describes. */',
    `export const mediaType = ${literal(mediaType)};`,
    '',
    ...lineList,
    '',
  ].join('\n');
}

function renderDataIndex(recordList) {
  return (
    recordList
      .map(({ mediaType }) => {
        const [type] = mediaType.split('/');

        return `export * as ${toPropertyName(mediaType)} from './record/${type}/${readFileName(mediaType)}';`;
      })
      .join('\n') + '\n'
  );
}

function renderDataTypes(recordList) {
  const lineList = ['interface RecordMap {'];

  for (const { mediaType } of recordList) {
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
    '/** A glob pattern as written in the source, for example `*.png`. */',
    'export interface Glob {',
    '  pattern: string;',
    '  weight: number | null;',
    '  caseSensitive: boolean;',
    '}',
    '',
    '/** A magic match node. `matchList` holds nested matches. */',
    'export interface Match {',
    '  type: string | null;',
    '  value: string | null;',
    '  offset: string | null;',
    '  mask: string | null;',
    '  matchList: Match[];',
    '}',
    '',
    '/** A magic rule: every match must hold for the rule to apply. */',
    'export interface Magic {',
    '  priority: number | null;',
    '  matchList: Match[];',
    '}',
    '',
    '/** A tree match node. `matchList` holds nested matches. */',
    'export interface TreeMatch {',
    '  type: string | null;',
    '  path: string | null;',
    '  matchCase: boolean;',
    '  matchList: TreeMatch[];',
    '}',
    '',
    '/** A treemagic rule: every tree match must hold for the rule to apply. */',
    'export interface TreeMagic {',
    '  priority: number | null;',
    '  delete: boolean;',
    '  treeMatchList: TreeMatch[];',
    '}',
    '',
    '/** An XML root element signature. */',
    'export interface RootXml {',
    '  type: string | null;',
    '  namespaceURI: string | null;',
    '  localName: string | null;',
    '}',
    '',
    'export interface RecordModule {',
    '  mediaType: string;',
    '  commentList: string[];',
    '  acronym: string | null;',
    '  expandedAcronym: string | null;',
    '  genericIconName: string | null;',
    '  aliasList: (string | null)[];',
    '  subClassOfList: (string | null)[];',
    '  globList: Glob[];',
    '  magicList: Magic[];',
    '  treeMagicList: TreeMagic[];',
    '  rootXmlList: RootXml[];',
    '}',
    '',
  ].join('\n');
}

function renderSource(source) {
  const fieldList = [
    `  project: ${literal(source.project)},`,
    `  url: ${literal(source.url)},`,
    `  snapshot: ${literal(source.snapshot)},`,
    `  commit: ${literal(source.commit)},`,
    `  collected: ${literal(source.collected)},`,
    `  digest: ${literal(source.digest)},`,
  ];

  return `export const source = {\n${fieldList.join('\n')}\n};\n\nexport * as data from './data/index.mjs';\n`;
}

function sortKeys(value) {
  const sorted = {};

  for (const key of Object.keys(value).sort()) {
    sorted[key] = value[key];
  }

  return sorted;
}

function renderManifest(manifest, recordList) {
  const exportMap = {
    '.': {
      import: './src/index.mjs',
      types: './src/index.d.mts',
    },
    './data': {
      import: './src/data/index.mjs',
      types: './src/data/index.d.mts',
    },
  };

  for (const { mediaType } of recordList) {
    const [type] = mediaType.split('/');

    exportMap[`./${mediaType}`] = {
      import: `./src/data/record/${type}/${readFileName(mediaType)}`,
      types: './src/data/record.d.mts',
    };
  }

  return `${JSON.stringify({ ...manifest, exports: sortKeys(exportMap) }, null, 2)}\n`;
}

const commit = fs.readFileSync(COMMIT_FILE, 'utf8').trim();
const xml = fs.readFileSync(REFERENCE, 'utf8');
const parser = new XMLParser({
  ignoreAttributes: false,
  attributeNamePrefix: '@',
  isArray: (name) => ARRAY_ELEMENT_SET.has(name),
  parseAttributeValue: false,
  parseTagValue: false,
  trimValues: false,
});
const document = parser.parse(xml);
const nodeList = document['mime-info']['mime-type'];
const recordList = nodeList
  .map((node) => readRecord(node))
  .sort((left, right) => (left.mediaType < right.mediaType ? -1 : 1));
const source = {
  project: 'freedesktop-shared-mime-info',
  url: `https://gitlab.freedesktop.org/${PROJECT}/-/blob/${commit}/${FILE_PATH}`,
  snapshot: `${RAW_BASE}/${commit}/${FILE_PATH}`,
  commit,
  collected: new Date().toISOString(),
  digest: createHash('sha256').update(xml).digest('hex'),
};

fs.rmSync(DATA_DIR, { recursive: true, force: true });
fs.mkdirSync(DATA_DIR, { recursive: true });

for (const record of recordList) {
  const [type] = record.mediaType.split('/');
  const typeDir = path.join(DATA_DIR, type);

  fs.mkdirSync(typeDir, { recursive: true });
  fs.writeFileSync(
    path.join(typeDir, readFileName(record.mediaType)),
    renderRecord(record),
  );
}

fs.writeFileSync(DATA_INDEX, renderDataIndex(recordList));
fs.writeFileSync(DATA_TYPES, renderDataTypes(recordList));
fs.writeFileSync(RECORD_TYPES, renderRecordTypes());
fs.writeFileSync(TARGET, renderSource(source));
fs.writeFileSync(
  MANIFEST,
  renderManifest(JSON.parse(fs.readFileSync(MANIFEST, 'utf8')), recordList),
);

console.log(`records ${recordList.length}`);
