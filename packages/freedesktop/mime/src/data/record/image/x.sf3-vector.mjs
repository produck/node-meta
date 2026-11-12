/** The media type this record describes. */
export const mediaType = 'image/x.sf3-vector';

export const commentList = ['SF3 Vector Graphic'];
export const acronym = 'SF3';
export const expandedAcronym = 'Simple File Format Family';
export const genericIconName = null;
export const aliasList = [];
export const subClassOfList = [];
export const magicList = [
  {
    priority: null,
    matchList: [
      {
        type: 'string',
        value: '\\x81SF3\\x00\\xE0\\xD0\\x0D\\x0A\\x0A\\x09',
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
const glob0 = '*.vec.sf3';
const glob1 = '*.sf3';

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
