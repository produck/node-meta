import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { describe, it } from 'node:test';

import { source } from '../src/index.mjs';
import * as data from '../src/data/index.mjs';

const HERE = path.dirname(fileURLToPath(import.meta.url));
const RECORD_DIR = path.resolve(HERE, '..', 'src', 'data', 'record');

function readFileName(mibEnum) {
  return `${String(mibEnum).padStart(4, '0')}.mjs`;
}

const namespaceList = Object.entries(data).filter(([name]) =>
  /^mib\d+$/.test(name),
);

describe('source', () => {
  it('should point at the IANA registry', () => {
    assert.equal(
      source.url,
      'https://www.iana.org/assignments/character-sets/character-sets.xml',
    );
  });

  it('should carry a date and a digest', () => {
    assert.equal(new Date(source.updated).toISOString(), source.updated);
    assert.match(source.digest, /^[0-9a-f]{64}$/);
  });
});

describe('data', () => {
  it('should export one namespace per record file', () => {
    assert.equal(namespaceList.length, fs.readdirSync(RECORD_DIR).length);
  });

  it('should name every namespace after its mibEnum without padding', () => {
    for (const [name] of namespaceList) {
      assert.equal(name.startsWith('mib0'), false, name);
    }
  });

  it('should expose every field on every namespace', () => {
    for (const [name, namespace] of namespaceList) {
      assert.equal(typeof namespace.name, 'string', name);
      assert.equal(typeof namespace.description, 'string', name);
      assert.ok(Array.isArray(namespace.xrefList), name);
      assert.ok('preferredAlias' in namespace, name);
      assert.ok(Array.isArray(namespace.aliasList), name);
      assert.ok('date' in namespace, name);
    }
  });

  it('should match the file of every namespace', () => {
    for (const [name, namespace] of namespaceList) {
      const mibEnum = Number(name.slice(3));

      assert.equal(namespace.mibEnum, mibEnum, name);
      assert.equal(
        fs.existsSync(path.join(RECORD_DIR, readFileName(mibEnum))),
        true,
        name,
      );
    }
  });

  it('should hold unique mibEnum values', () => {
    const mibEnumList = namespaceList.map(([, namespace]) => namespace.mibEnum);

    assert.equal(new Set(mibEnumList).size, mibEnumList.length);
  });

  it('should hold unique names', () => {
    const nameList = namespaceList.map(([, namespace]) => namespace.name);

    assert.equal(new Set(nameList).size, nameList.length);
  });

  it('should keep UTF-8 at mibEnum 106', () => {
    assert.equal(data.mib106.name, 'UTF-8');
  });

  it('should pad every record file name to four digits', () => {
    for (const name of fs.readdirSync(RECORD_DIR)) {
      assert.match(name, /^\d{4}\.mjs$/);
    }
  });
});
