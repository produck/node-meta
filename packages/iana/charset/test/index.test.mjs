import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { describe, it } from 'node:test';

import { RECORD_LIST } from '../src/index.mjs';

const HERE = path.dirname(fileURLToPath(import.meta.url));
const DATA_DIR = path.resolve(HERE, '..', 'data');

describe('::RECORD_LIST', () => {
  it('should be sorted by ascending mibEnum', () => {
    for (let index = 1; index < RECORD_LIST.length; index += 1) {
      assert.ok(RECORD_LIST[index - 1].mibEnum < RECORD_LIST[index].mibEnum);
    }
  });

  it('should hold one record per mibEnum', () => {
    const mibEnumSet = new Set(RECORD_LIST.map((record) => record.mibEnum));

    assert.equal(mibEnumSet.size, RECORD_LIST.length);
  });

  it('should hold one record per name', () => {
    const nameSet = new Set(RECORD_LIST.map((record) => record.name));

    assert.equal(nameSet.size, RECORD_LIST.length);
  });

  it('should hold the expected shape on every record', () => {
    for (const record of RECORD_LIST) {
      assert.equal(typeof record.name, 'string');
      assert.equal(typeof record.mibEnum, 'number');
      assert.ok(
        record.preferredAlias === null ||
          typeof record.preferredAlias === 'string',
      );
      assert.ok(Array.isArray(record.aliasList));
      assert.ok(record.date === null || typeof record.date === 'string');
    }
  });

  it('should keep UTF-8 at mibEnum 106', () => {
    const record = RECORD_LIST.find((item) => item.mibEnum === 106);

    assert.equal(record.name, 'UTF-8');
  });
});

describe('data', () => {
  it('should hold exactly one file per record', () => {
    const fileList = fs
      .readdirSync(DATA_DIR)
      .filter((name) => name.endsWith('.mjs'));

    assert.equal(fileList.length, RECORD_LIST.length);
  });

  it('should name every file after its mibEnum', () => {
    for (const record of RECORD_LIST) {
      const file = path.join(DATA_DIR, `${record.mibEnum}.mjs`);

      assert.equal(fs.existsSync(file), true, file);
    }
  });

  it('should export description separately on every file', async () => {
    for (const record of RECORD_LIST) {
      const file = path.join(DATA_DIR, `${record.mibEnum}.mjs`);
      const { default: data, description } = await import(
        `file://${file.replaceAll('\\', '/')}`
      );

      assert.equal(data.mibEnum, record.mibEnum);
      assert.equal(data.description, undefined);
      assert.equal(typeof description, 'string');
    }
  });

  it('should export xrefList separately on every file', async () => {
    for (const record of RECORD_LIST) {
      const file = path.join(DATA_DIR, `${record.mibEnum}.mjs`);
      const { default: data, xrefList } = await import(
        `file://${file.replaceAll('\\', '/')}`
      );

      assert.equal(data.mibEnum, record.mibEnum);
      assert.equal(data.xrefList, undefined);
      assert.ok(Array.isArray(xrefList));
    }
  });
});
