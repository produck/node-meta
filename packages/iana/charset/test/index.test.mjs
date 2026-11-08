import assert from 'node:assert/strict';
import { describe, it } from 'node:test';

import {
  ALIAS_COUNT,
  COUNT,
  RECORD_LIST,
  SOURCE,
  findAll,
  findByAlias,
  findByMibEnum,
  isAlias,
  isMibEnum,
} from '../src/index.mjs';

const UTF8_MIB_ENUM = 106;

describe('::SOURCE', () => {
  it('should point at the IANA registry', () => {
    assert.equal(
      SOURCE.url,
      'https://www.iana.org/assignments/character-sets/character-sets.xml',
    );
    assert.match(SOURCE.updated, /^\d{4}-\d{2}-\d{2}$/);
    assert.match(SOURCE.digest, /^[0-9a-f]{64}$/);
  });

  it('should be frozen', () => {
    assert.throws(() => {
      SOURCE.url = 'x';
    });
  });
});

describe('::COUNT', () => {
  it('should match the record list', () => {
    assert.equal(COUNT, RECORD_LIST.length);
    assert.ok(COUNT > 0);
  });
});

describe('::ALIAS_COUNT', () => {
  it('should be greater than the record count', () => {
    assert.ok(ALIAS_COUNT > COUNT);
  });
});

describe('::RECORD_LIST', () => {
  it('should be sorted by ascending mibEnum', () => {
    for (let index = 1; index < RECORD_LIST.length; index += 1) {
      assert.ok(RECORD_LIST[index - 1].mibEnum < RECORD_LIST[index].mibEnum);
    }
  });

  it('should be frozen', () => {
    assert.throws(() => {
      RECORD_LIST.push(null);
    });
  });
});

describe('::isAlias()', () => {
  it('should accept a registered alias in any case', () => {
    assert.equal(isAlias('UTF-8'), true);
    assert.equal(isAlias('utf-8'), true);
    assert.equal(isAlias(' UTF-8 '), true);
    assert.equal(isAlias('csUTF8'), true);
  });

  it('should reject an unknown alias', () => {
    assert.equal(isAlias('not-a-charset'), false);
  });

  it('should reject a non-string value', () => {
    assert.equal(isAlias(null), false);
    assert.equal(isAlias(1), false);
    assert.equal(isAlias({}), false);
  });
});

describe('::isMibEnum()', () => {
  it('should accept a registered value', () => {
    assert.equal(isMibEnum(UTF8_MIB_ENUM), true);
  });

  it('should reject an unknown value', () => {
    assert.equal(isMibEnum(0), false);
    assert.equal(isMibEnum('106'), false);
  });
});

describe('::findByAlias()', () => {
  it('should find a registration through its preferred alias', () => {
    const record = findByAlias('latin1');

    assert.equal(record.name, 'ISO_8859-1:1987');
    assert.equal(record.preferredAlias, 'ISO-8859-1');
    assert.ok(record.aliasList.includes('latin1'));
  });

  it('should find a registration through an uppercase alias', () => {
    const record = findByAlias('CSUTF8');

    assert.equal(record.name, 'UTF-8');
    assert.equal(record.mibEnum, UTF8_MIB_ENUM);
  });

  it('should answer every alias of a registration', () => {
    const record = findByAlias('GBK');

    assert.deepEqual(record.aliasList, [
      'CP936',
      'MS936',
      'windows-936',
      'csGBK',
    ]);
  });

  it('should answer an independent copy', () => {
    const record = findByAlias('UTF-8');

    record.aliasList.push('mutated');

    assert.equal(findByAlias('UTF-8').aliasList.includes('mutated'), false);
  });

  it('should answer null for an unknown alias', () => {
    assert.equal(findByAlias('not-a-charset'), null);
  });

  it('should answer null for a non-string value', () => {
    assert.equal(findByAlias(undefined), null);
    assert.equal(findByAlias(106), null);
  });
});

describe('::findByMibEnum()', () => {
  it('should find a registration', () => {
    const record = findByMibEnum(UTF8_MIB_ENUM);

    assert.equal(record.name, 'UTF-8');
    assert.deepEqual(record.xrefList, [{ type: 'rfc', data: 'rfc3629' }]);
  });

  it('should answer an independent copy', () => {
    const record = findByMibEnum(UTF8_MIB_ENUM);

    record.xrefList.push({ type: 'x', data: 'y' });

    assert.equal(findByMibEnum(UTF8_MIB_ENUM).xrefList.length, 1);
  });

  it('should answer null for an unknown value', () => {
    assert.equal(findByMibEnum(0), null);
    assert.equal(findByMibEnum(undefined), null);
  });
});

describe('::findAll()', () => {
  it('should answer every record', () => {
    const recordList = findAll();

    assert.equal(recordList.length, COUNT);
    assert.ok(recordList.every((record) => typeof record.name === 'string'));
  });

  it('should answer independent copies', () => {
    const recordList = findAll();

    recordList[0].name = 'mutated';

    assert.notEqual(findAll()[0].name, 'mutated');
  });
});
