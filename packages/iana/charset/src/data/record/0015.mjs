import * as PERSON from '../xref/person.mjs';
import * as RFC from '../xref/rfc.mjs';

export const description =
  'JIS X 0201-1976.   One byte only, this is equivalent to\nJIS/Roman (similar to ASCII) plus eight-bit half-width\nKatakana';

export const xrefList = [RFC.RFC1345, PERSON.KELD_SIMONSEN];

export const name = 'JIS_X0201';

export const mibEnum = 15;

export const preferredAlias = null;

export const aliasList = ['X0201', 'csHalfWidthKatakana'];

export const date = null;
