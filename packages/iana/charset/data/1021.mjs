export const description =
  'Note: This charset is used to encode Unicode in IMAP mailbox names; \nsee. It should never be used \noutside this context. A name has been assigned so that charset processing \nimplementations can refer to it in a consistent way.';

export const xrefList = [{ type: 'person', data: 'Florian_Weimer' }];

export default {
  name: 'UTF-7-IMAP',
  mibEnum: 1021,
  preferredAlias: null,
  aliasList: ['csUTF7IMAP'],
  date: '2021-01-04',
};
