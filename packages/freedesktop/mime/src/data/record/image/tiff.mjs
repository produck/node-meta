/** The media type this record describes. */
export const mediaType = 'image/tiff';

export const commentList = ['TIFF image'];
export const acronym = 'TIFF';
export const expandedAcronym = 'Tagged Image File Format';
export const genericIconName = null;
export const aliasList = [];
export const subClassOfList = [];
export const magicList = [
  {
    priority: null,
    matchList: [
      {
        type: 'string',
        value: 'MM\\x00\\x2a',
        offset: '0',
        mask: null,
        matchList: [],
      },
      {
        type: 'string',
        value: 'II\\x2a\\x00',
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
const glob0 = '*.tif';
const glob1 = '*.tiff';

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
