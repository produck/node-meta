/** The media type this record describes. */
export const mediaType = 'font/ttf';

export const commentList = ['TrueType font'];
export const acronym = null;
export const expandedAcronym = null;
export const genericIconName = null;
export const aliasList = ['application/x-font-ttf'];
export const subClassOfList = [];
export const magicList = [
  {
    priority: null,
    matchList: [
      {
        type: 'string',
        value: 'FFIL',
        offset: '0',
        mask: null,
        matchList: [],
      },
      {
        type: 'string',
        value: 'FFIL',
        offset: '65',
        mask: null,
        matchList: [],
      },
      {
        type: 'string',
        value: '\\000\\001\\000\\000\\000',
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
const glob0 = '*.ttf';

export const globList = [
  {
    pattern: glob0,
    weight: null,
    caseSensitive: false,
  },
];

export const globPatternList = [glob0];
