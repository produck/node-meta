export const description =
  'JIS X 0201-1976.   One byte only, this is equivalent to\nJIS/Roman (similar to ASCII) plus eight-bit half-width\nKatakana';

export const xrefList = [
  { type: 'rfc', data: 'rfc1345' },
  { type: 'person', data: 'Keld_Simonsen' },
];

export default {
  name: 'JIS_X0201',
  mibEnum: 15,
  preferredAlias: null,
  aliasList: ['X0201', 'csHalfWidthKatakana'],
  date: null,
};
