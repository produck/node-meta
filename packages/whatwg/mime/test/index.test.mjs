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
  it('should identify the MIME Sniffing standard', () => {
    assert.equal(source.standard, 'mimesniff');
    assert.equal(source.url, 'https://mimesniff.spec.whatwg.org/');
  });

  it('should pin a commit snapshot', () => {
    assert.match(source.commit, /^[0-9a-f]{40}$/);
    assert.equal(
      source.snapshot,
      `https://mimesniff.spec.whatwg.org/commit-snapshots/${source.commit}/`,
    );
  });

  it('should record the specification and collection dates', () => {
    assert.match(source.updated, /^\d{4}-\d{2}-\d{2}$/);
    assert.equal(new Date(source.collected).toISOString(), source.collected);
  });

  it('should record a digest of the snapshot', () => {
    assert.match(source.digest, /^[0-9a-f]{64}$/);
  });
});

describe('data', () => {
  it('should expose one key per record path', () => {
    assert.deepEqual(keyList, recordPathList);
  });

  it('should tag every record with its media type', () => {
    for (const key of keyList) {
      assert.equal(data[key].mediaType, key);
      assert.equal(data[key].type, key.slice(0, key.indexOf('/')));
    }
  });

  it('should keep the types absent from the IANA registry', () => {
    assert.equal(data['video/webm'].subtype, 'webm');
    assert.equal(data['image/x-icon'].subtype, 'x-icon');
    assert.equal(data['audio/wave'].subtype, 'wave');
    assert.equal(data['application/x-gzip'].type, 'application');
  });

  it('should keep the JavaScript alias group', () => {
    assert.equal(data['text/javascript1.5'].subtype, 'javascript1.5');
    assert.equal(data['application/x-javascript'].type, 'application');
  });

  it('should record the section that lists the media type', () => {
    assert.equal(data['application/json'].section, 'mime-type-miscellaneous');
    assert.equal(
      data['image/x-icon'].section,
      'matching-an-image-type-pattern',
    );
  });
});

describe('exports', () => {
  it('should declare the root and data entries', () => {
    assert.equal(manifest.exports['.'].import, './src/index.mjs');
    assert.equal(manifest.exports['./data'].import, './src/data/index.mjs');
  });

  it('should map every record through one wildcard subpath', () => {
    assert.deepEqual(manifest.exports['./*'], {
      types: './src/data/record.d.mts',
      import: './src/data/record/*.mjs',
    });
  });

  it('should ship the shared record declaration', () => {
    assert.ok(fs.existsSync(path.join(PACKAGE_ROOT, 'src/data/record.d.mts')));
  });
});
