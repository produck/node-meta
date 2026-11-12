/** The media type this record describes. */
export const mediaType = 'image/x-xpixmap';

export const commentList = ['XPM image'];
export const acronym = 'XPM';
export const expandedAcronym = 'X PixMap';
export const genericIconName = null;
export const aliasList = ['image/x-xpm'];
export const subClassOfList = [];
export const magicList = [
  {
    priority: null,
    matchList: [
      {
        type: 'string',
        value: '/* XPM */',
        offset: '0',
        mask: null,
        matchList: [],
      },
      {
        type: 'string',
        value: '! XPM2\\n',
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
const glob0 = '*.xpm';

export const globList = [
  {
    pattern: glob0,
    weight: null,
    caseSensitive: false,
  },
];

export const globPatternList = [glob0];
