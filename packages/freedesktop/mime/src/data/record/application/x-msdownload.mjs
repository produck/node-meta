/** The media type this record describes. */
export const mediaType = 'application/x-msdownload';

export const commentList = ['Windows or DOS program'];
export const acronym = 'DOS';
export const expandedAcronym = 'Disk Operating System';
export const genericIconName = 'application-x-executable';
export const aliasList = ['application/x-ms-dos-executable'];
export const subClassOfList = ['application/x-executable'];
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

/** About glob */
const glob0 = '*.exe';
const glob1 = '*.dll';
const glob2 = '*.cpl';
const glob3 = '*.drv';
const glob4 = '*.scr';

export const globList = [
  {
    pattern: glob0,
    weight: null,
    caseSensitive: false,
  },
  {
    pattern: glob1,
    weight: null,
    caseSensitive: false,
  },
  {
    pattern: glob2,
    weight: null,
    caseSensitive: false,
  },
  {
    pattern: glob3,
    weight: null,
    caseSensitive: false,
  },
  {
    pattern: glob4,
    weight: null,
    caseSensitive: false,
  },
];

export const globPatternList = [glob0, glob1, glob2, glob3, glob4];
