/** The media type this record describes. */
export const mediaType = 'application/x-msdownload';

export const commentList = ['Windows or DOS program'];
export const acronym = 'DOS';
export const expandedAcronym = 'Disk Operating System';
export const genericIconName = 'application-x-executable';
export const aliasList = ['application/x-ms-dos-executable'];
export const subClassOfList = ['application/x-executable'];
export const globList = [
  {
    pattern: '*.exe',
    weight: null,
    caseSensitive: false,
  },
  {
    pattern: '*.dll',
    weight: null,
    caseSensitive: false,
  },
  {
    pattern: '*.cpl',
    weight: null,
    caseSensitive: false,
  },
  {
    pattern: '*.drv',
    weight: null,
    caseSensitive: false,
  },
  {
    pattern: '*.scr',
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
        value: 'MZ',
        offset: '0',
        mask: null,
        matchList: [],
      },
    ],
  },
];
export const treeMagicList = [];
export const rootXmlList = [];
