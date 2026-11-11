/** The media type this record describes. */
export const mediaType = 'application/x-sylk';

export const commentList = ['Spreadsheet interchange document'];
export const acronym = null;
export const expandedAcronym = null;
export const genericIconName = 'x-office-spreadsheet';
export const aliasList = ['text/spreadsheet'];
export const subClassOfList = ['text/plain'];
export const globList = [
  {
    pattern: '*.sylk',
    weight: null,
    caseSensitive: false,
  },
  {
    pattern: '*.slk',
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
        value: 'ID;',
        offset: '0',
        mask: null,
        matchList: [],
      },
    ],
  },
];
export const treeMagicList = [];
export const rootXmlList = [];
