import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import { createHash } from 'node:crypto';
import { fileURLToPath } from 'node:url';
import { describe, it } from 'node:test';

import { source } from '../src/index.mjs';
import * as data from '../src/data/index.mjs';

const HERE = path.dirname(fileURLToPath(import.meta.url));
const PACKAGE_ROOT = path.resolve(HERE, '..');
const MANIFEST = path.join(PACKAGE_ROOT, 'package.json');
const REFERENCE = path.join(PACKAGE_ROOT, 'docs', 'reference.xml');
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
  it('should identify the freedesktop project', () => {
    assert.equal(source.project, 'freedesktop-shared-mime-info');
  });

  it('should pin a commit', () => {
    assert.match(source.commit, /^[0-9a-f]{40}$/);
  });

  it('should point at the pinned snapshot', () => {
    assert.ok(source.snapshot.includes(source.commit));
    assert.ok(source.url.includes(source.commit));
  });

  it('should record a collection timestamp', () => {
    assert.ok(!Number.isNaN(Date.parse(source.collected)));
  });

  it('should match the digest of the shipped snapshot', () => {
    const actual = createHash('sha256')
      .update(fs.readFileSync(REFERENCE))
      .digest('hex');

    assert.equal(source.digest, actual);
  });
});

describe('data', () => {
  it('should expose one key per record path', () => {
    assert.deepEqual(keyList.slice().sort(), recordPathList);
  });

  it('should expose every field on every record', () => {
    for (const key of keyList) {
      const record = data[key];

      assert.equal(typeof record.mediaType, 'string');
      assert.ok(Array.isArray(record.commentList));
      assert.ok(record.aliasList.every((item) => typeof item === 'string'));
      assert.ok(
        record.subClassOfList.every((item) => typeof item === 'string'),
      );
      assert.ok(Array.isArray(record.globList));
      assert.ok(Array.isArray(record.magicList));
      assert.ok(Array.isArray(record.treeMagicList));
      assert.ok(Array.isArray(record.rootXmlList));
    }
  });

  it('should match the media type of every record path', () => {
    for (const key of keyList) {
      assert.equal(data[key].mediaType, key);
    }
  });

  it('should hold unique media types', () => {
    const typeList = keyList.map((key) => data[key].mediaType);

    assert.equal(new Set(typeList).size, typeList.length);
  });

  it('should keep the glob of a known type', () => {
    assert.deepEqual(
      data['image/png'].globList.map((glob) => glob.pattern),
      ['*.png'],
    );
  });

  it('should keep every extension of a known type', () => {
    assert.deepEqual(
      data['text/javascript'].globList.map((glob) => glob.pattern),
      ['*.cjs', '*.js', '*.jsm', '*.mjs'],
    );
  });

  it('should keep the alias list of a known type', () => {
    assert.ok(data['application/xml'].aliasList.includes('text/xml'));
    assert.ok(
      data['text/javascript'].aliasList.includes('application/javascript'),
    );
  });

  it('should keep the inheritance of a known type', () => {
    assert.deepEqual(data['application/xml'].subClassOfList, ['text/plain']);
  });

  it('should keep nested magic matches', () => {
    const magic = data['video/vnd.avi'].magicList[0];

    assert.equal(magic.matchList[0].value, 'RIFF');
    assert.equal(magic.matchList[0].matchList[0].value, 'AVI ');
    assert.equal(magic.matchList[0].matchList[0].offset, '8');
  });

  it('should keep trailing spaces in magic values', () => {
    const magic = data['video/vnd.avi'].magicList[0];

    assert.equal(magic.matchList[0].matchList[0].value.length, 4);
  });

  it('should keep the priority of a magic rule', () => {
    assert.equal(data['application/xml'].magicList[0].priority, 40);
  });

  it('should keep glob weights where declared', () => {
    const weighted = keyList
      .flatMap((key) => data[key].globList)
      .filter((glob) => glob.weight !== null);

    assert.ok(weighted.length > 0);
    assert.ok(weighted.every((glob) => Number.isInteger(glob.weight)));
  });

  it('should keep non extension glob patterns', () => {
    const patternList = keyList.flatMap((key) =>
      data[key].globList.map((glob) => glob.pattern),
    );

    assert.ok(patternList.includes('Dockerfile'));
    assert.ok(
      patternList.includes('Makefile') || patternList.includes('makefile'),
    );
  });

  it('should keep tree magic rules', () => {
    const count = keyList.reduce(
      (total, key) => total + data[key].treeMagicList.length,
      0,
    );

    assert.ok(count > 0);
  });

  it('should keep root XML signatures', () => {
    const count = keyList.reduce(
      (total, key) => total + data[key].rootXmlList.length,
      0,
    );

    assert.ok(count > 0);
  });

  it('should keep the acronym of a known type', () => {
    assert.equal(data['image/png'].acronym, 'PNG');
    assert.equal(
      data['image/png'].expandedAcronym,
      'Portable Network Graphics',
    );
  });

  it('should keep the generic icon of a known type', () => {
    assert.equal(data['application/xml'].genericIconName, 'text-html');
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

    assert.equal(subpathList.length, 1063);
    assert.deepEqual(manifest.exports['./text/javascript'], {
      types: './src/data/record.d.mts',
      import: './src/data/record/text/javascript.mjs',
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
