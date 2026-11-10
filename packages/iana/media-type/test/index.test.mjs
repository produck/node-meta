import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { describe, it } from 'node:test';

import { source } from '../src/index.mjs';
import * as data from '../src/data/index.mjs';

const HERE = path.dirname(fileURLToPath(import.meta.url));
const PACKAGE_ROOT = path.resolve(HERE, '..');
const MANIFEST = path.join(PACKAGE_ROOT, 'package.json');
const RECORD_DIR = path.join(PACKAGE_ROOT, 'src', 'data', 'record');

function readRecordPathList() {
  const pathList = [];

  for (const type of fs.readdirSync(RECORD_DIR)) {
    const typeDir = path.join(RECORD_DIR, type);

    if (!fs.statSync(typeDir).isDirectory()) {
      continue;
    }

    for (const name of fs.readdirSync(typeDir)) {
      if (name.endsWith('.mjs')) {
        pathList.push(`${type}/${name.slice(0, -'.mjs'.length)}`);
      }
    }
  }

  return pathList.sort();
}

const recordPathList = readRecordPathList();
const manifest = JSON.parse(fs.readFileSync(MANIFEST, 'utf8'));
const keyList = Object.keys(data);

describe('source', () => {
  it('should point at the IANA registry', () => {
    assert.equal(
      source.url,
      'https://www.iana.org/assignments/media-types/media-types.xml',
    );
  });

  it('should record an ISO timestamp and a digest', () => {
    assert.equal(new Date(source.updated).toISOString(), source.updated);
    assert.match(source.digest, /^[0-9a-f]{64}$/);
  });
});

describe('data', () => {
  it('should expose one key per record path', () => {
    assert.deepEqual(keyList, recordPathList);
  });

  it('should tag every record with its media type', () => {
    for (const key of keyList) {
      assert.equal(data[key].type, key.slice(0, key.indexOf('/')));
    }
  });

  it('should expose a structured suffix record', () => {
    assert.equal(data['application/json'].type, 'application');
    assert.equal(data['application/ld+json'].subtype, 'ld+json');
    assert.equal(data['text/html'].type, 'text');
  });

  it('should share one record module between an alias and its owner', () => {
    assert.deepEqual({ ...data['image/x-emf'] }, { ...data['image/emf'] });
  });
});

describe('exports', () => {
  it('should declare the root and data entries', () => {
    assert.equal(manifest.exports['.'].import, './src/index.mjs');
    assert.equal(manifest.exports['./data'].import, './src/data/index.mjs');
  });

  it('should map every record through one wildcard subpath', () => {
    const wildcard = manifest.exports['./*'];

    assert.deepEqual(wildcard, {
      types: './src/data/record.d.mts',
      import: './src/data/record/*.mjs',
    });

    const subpathList = Object.keys(manifest.exports).filter(
      (key) => key !== '.' && key !== './data' && key !== './*',
    );

    assert.deepEqual(subpathList, []);
  });

  it('should resolve a record module through the wildcard', async () => {
    const record = await import('../src/data/record/application/json.mjs');

    assert.equal(record.name, 'json');
    assert.equal(typeof record.subtype, 'string');
  });

  it('should ship the shared record declaration', () => {
    assert.ok(fs.existsSync(path.join(PACKAGE_ROOT, 'src/data/record.d.mts')));
  });
});
