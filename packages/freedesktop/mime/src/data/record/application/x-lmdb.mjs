/** The media type this record describes. */
export const mediaType = 'application/x-lmdb';

export const commentList = ['LMDB database'];
export const acronym = 'LMDB';
export const expandedAcronym = 'Lightning Memory-Mapped Database';
export const genericIconName = 'x-office-document';
export const aliasList = [];
export const subClassOfList = [];
export const magicList = [
  {
    priority: null,
    matchList: [
      {
        type: 'little32',
        value: '0xBEEFC0DE',
        offset: '16',
        mask: null,
        matchList: [],
      },
    ],
  },
];
export const treeMagicList = [];
export const rootXmlList = [];

/** About glob */
const glob0 = '*.mdb';
const glob1 = '*.lmdb';

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
