import * as PERSON from '../xref/person.mjs';

export const description =
  'Note: This charset is used to encode Unicode in IMAP mailbox names; \nsee. It should never be used \noutside this context. A name has been assigned so that charset processing \nimplementations can refer to it in a consistent way. rfc3501';

export const xrefList = [PERSON.FLORIAN_WEIMER];

export const name = 'UTF-7-IMAP';

export const mibEnum = 1021;

export const preferredAlias = null;

export const aliasList = ['csUTF7IMAP'];

export const date = '2021-01-04';
