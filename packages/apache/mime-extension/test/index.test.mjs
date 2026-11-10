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
  it('should identify the Apache httpd project', () => {
    assert.equal(source.project, 'apache-httpd');
  });

  it('should pin a commit snapshot', () => {
    assert.match(source.commit, /^[0-9a-f]{40}$/);
    assert.ok(source.snapshot.includes(source.commit));
    assert.ok(source.url.includes(source.commit));
  });

  it('should record the collection time and digest', () => {
    assert.equal(new Date(source.collected).toISOString(), source.collected);
    assert.match(source.digest, /^[0-9a-f]{64}$/);
  });
});

describe('data', () => {
  it('should expose one key per record path', () => {
    assert.deepEqual(keyList, recordPathList);
  });

  it('should export only the extension list from every record', () => {
    for (const key of keyList) {
      assert.deepEqual(Object.keys(data[key]), ['extensionList'], key);
    }
  });

  it('should expose a non-empty extension list for every record', () => {
    for (const key of keyList) {
      assert.ok(data[key].extensionList.length > 0, key);
    }
  });

  it('should store extensions without the leading dot', () => {
    for (const key of keyList) {
      for (const extension of data[key].extensionList) {
        assert.doesNotMatch(extension, /^\./, `${key} ${extension}`);
      }
    }
  });

  it('should map common media types to their extensions', () => {
    assert.deepEqual(data['text/html'].extensionList, ['html', 'htm']);
    assert.deepEqual(data['application/json'].extensionList, ['json']);
    assert.deepEqual(data['image/x-icon'].extensionList, ['ico']);
    assert.deepEqual(data['application/x-tar'].extensionList, ['tar']);
  });

  it('should keep multiple extensions for one media type', () => {
    assert.ok(data['image/jpeg'].extensionList.includes('jpg'));
    assert.ok(data['image/jpeg'].extensionList.includes('jpeg'));
  });

  it('should not include entries without any extension', () => {
    assert.equal(data['application/zip'].extensionList.length, 1);
    assert.equal(
      keyList.every((key) => data[key].extensionList.length > 0),
      true,
    );
  });
});

describe('exports', () => {
  it('should declare the root and data entries', () => {
    assert.equal(manifest.exports['.'].import, './src/index.mjs');
    assert.equal(manifest.exports['./data'].import, './src/data/index.mjs');
  });

  it('should map every record through its own subpath', () => {
    const subpathList = Object.keys(manifest.exports).filter(
      (key) => key !== '.' && key !== './data',
    );

    assert.equal(subpathList.length, 776);
    assert.deepEqual(manifest.exports['./text/html'], {
      types: './src/data/record.d.mts',
      import: './src/data/record/text/html.mjs',
    });
  });

  it('should keep every subpath resolvable on disk', () => {
    for (const [subpath, entry] of Object.entries(manifest.exports)) {
      if (subpath === '.' || subpath === './data') {
        continue;
      }

      assert.ok(
        fs.existsSync(path.join(PACKAGE_ROOT, entry.import)),
        `${subpath} -> ${entry.import}`,
      );
    }
  });

  it('should ship the shared record declaration', () => {
    assert.ok(fs.existsSync(path.join(PACKAGE_ROOT, 'src/data/record.d.mts')));
  });
});
