/** The media type this record describes. */
export const mediaType = 'application/x-pyspread-spreadsheet';

export const commentList = ['Pyspread spreadsheet'];
export const acronym = null;
export const expandedAcronym = null;
export const genericIconName = 'x-office-spreadsheet';
export const aliasList = [];
export const subClassOfList = [];
export const globList = [
  {
    pattern: '*.pysu',
    weight: null,
    caseSensitive: false,
  },
];
export const magicList = [
  {
    priority: null,
    matchList: [
      {
        type: 'string',
        value: '[Pyspread save file version]',
        offset: '0',
        mask: null,
        matchList: [],
      },
    ],
  },
];
export const treeMagicList = [];
export const rootXmlList = [];
