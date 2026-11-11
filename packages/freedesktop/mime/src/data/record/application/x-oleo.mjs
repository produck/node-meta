/** The media type this record describes. */
export const mediaType = 'application/x-oleo';

export const commentList = ['GNU Oleo spreadsheet'];
export const acronym = null;
export const expandedAcronym = null;
export const genericIconName = 'x-office-spreadsheet';
export const aliasList = [];
export const subClassOfList = [];
export const globList = [
  {
    pattern: '*.oleo',
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
        value: 'Oleo',
        offset: '31',
        mask: null,
        matchList: [],
      },
    ],
  },
];
export const treeMagicList = [];
export const rootXmlList = [];
