/** The media type this record describes. */
export const mediaType = 'application/fits';

export const commentList = ['FITS document'];
export const acronym = 'FITS';
export const expandedAcronym = 'Flexible Image Transport System';
export const genericIconName = null;
export const aliasList = ['image/x-fits', 'image/fits'];
export const subClassOfList = [];
export const magicList = [
  {
    priority: null,
    matchList: [
      {
        type: 'string',
        value: 'SIMPLE  =',
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
const glob0 = '*.fits';
const glob1 = '*.fit';
const glob2 = '*.fts';

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
];

export const globPatternList = [glob0, glob1, glob2];
