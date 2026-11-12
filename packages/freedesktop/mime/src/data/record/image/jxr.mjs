/** The media type this record describes. */
export const mediaType = 'image/jxr';

export const commentList = ['JPEG XR image'];
export const acronym = 'XR';
export const expandedAcronym = 'Extended Range';
export const genericIconName = null;
export const aliasList = ['image/vnd.ms-photo'];
export const subClassOfList = [];
export const magicList = [
  {
    priority: null,
    matchList: [
      {
        type: 'string',
        value: 'II\\xBC\\x01',
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
const glob0 = '*.jxr';
const glob1 = '*.hdp';
const glob2 = '*.wdp';

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
