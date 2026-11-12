/** The media type this record describes. */
export const mediaType = 'model/iges';

export const commentList = ['IGES document'];
export const acronym = 'IGES';
export const expandedAcronym = 'Initial Graphics Exchange Specification';
export const genericIconName = 'x-office-document';
export const aliasList = [];
export const subClassOfList = ['text/plain'];
export const magicList = [
  {
    priority: null,
    matchList: [
      {
        type: 'string',
        value: 'S      1\\x0a',
        offset: '72',
        mask: null,
        matchList: [],
      },
      {
        type: 'string',
        value: 'S0000001\\x0a',
        offset: '72',
        mask: null,
        matchList: [],
      },
    ],
  },
];
export const treeMagicList = [];
export const rootXmlList = [];

/** About glob */
const glob0 = '*.igs';
const glob1 = '*.iges';

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
];

export const globPatternList = [glob0, glob1];
