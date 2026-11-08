import { deepFreeze } from '@produck/deep-freeze-enumerable';

import Registry from './Registry.json' with { type: 'json' };

export const SOURCE = deepFreeze({ ...Registry.source });

function copyRecord(record) {
  return {
    ...record,
    aliasList: [...record.aliasList],
    xrefList: record.xrefList.map((xref) => ({ ...xref })),
  };
}

export const RECORD_LIST = deepFreeze(Registry.recordList.map(copyRecord));

const RECORD_MAP = new Map(
  RECORD_LIST.map((record) => [record.mibEnum, record]),
);
const ALIAS_MAP = new Map(Object.entries(Registry.aliasIndex));

export const COUNT = RECORD_LIST.length;
export const ALIAS_COUNT = ALIAS_MAP.size;

export function isAlias(value) {
  if (typeof value !== 'string') {
    return false;
  }

  return ALIAS_MAP.has(value.trim().toLowerCase());
}

export function isMibEnum(value) {
  return RECORD_MAP.has(value);
}

export function findByAlias(alias) {
  if (typeof alias !== 'string') {
    return null;
  }

  const mibEnum = ALIAS_MAP.get(alias.trim().toLowerCase());

  return mibEnum === undefined ? null : copyRecord(RECORD_MAP.get(mibEnum));
}

export function findByMibEnum(mibEnum) {
  const record = RECORD_MAP.get(mibEnum);

  return record === undefined ? null : copyRecord(record);
}

export function findAll() {
  return RECORD_LIST.map(copyRecord);
}
