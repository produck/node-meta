/** The media type this record describes. */
export const mediaType = 'image/x-ilbm';

export const commentList = ['ILBM image'];
export const acronym = 'ILBM';
export const expandedAcronym = 'InterLeaved BitMap';
export const genericIconName = null;
export const aliasList = ['image/x-iff'];
export const subClassOfList = ['application/x-iff'];
export const magicList = [
  {
    priority: null,
    matchList: [
      {
        type: 'string',
        value: 'ILBM',
        offset: '8',
        mask: null,
        matchList: [],
      },
      {
        type: 'string',
        value: 'PBM ',
        offset: '8',
        mask: null,
        matchList: [],
      },
    ],
  },
];
export const treeMagicList = [];
export const rootXmlList = [];

/** About glob */
const glob0 = '*.iff';
const glob1 = '*.ilbm';
const glob2 = '*.lbm';

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
