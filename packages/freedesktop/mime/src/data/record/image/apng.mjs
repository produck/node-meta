/** The media type this record describes. */
export const mediaType = 'image/apng';

export const commentList = ['Animated PNG image'];
export const acronym = 'PNG';
export const expandedAcronym = 'Portable Network Graphics';
export const genericIconName = null;
export const aliasList = ['image/vnd.mozilla.apng'];
export const subClassOfList = ['image/png'];
export const magicList = [
  {
    priority: 60,
    matchList: [
      {
        type: 'string',
        value: '\\x89PNG\\r\\n\\x1A\\n',
        offset: '0',
        mask: null,
        matchList: [
          {
            type: 'string',
            value: 'acTL',
            offset: '33:16384',
            mask: null,
            matchList: [],
          },
        ],
      },
    ],
  },
];
export const treeMagicList = [];
export const rootXmlList = [];

/** About glob */
const glob0 = '*.apng';
const glob1 = '*.png';

export const globList = [
  {
    pattern: glob0,
    weight: null,
    caseSensitive: false,
  },
  {
    pattern: glob1,
    weight: 40,
    caseSensitive: false,
  },
];

export const globPatternList = [glob0, glob1];
