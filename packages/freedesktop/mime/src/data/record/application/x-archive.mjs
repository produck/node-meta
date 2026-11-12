/** The media type this record describes. */
export const mediaType = 'application/x-archive';

export const commentList = ['AR archive'];
export const acronym = null;
export const expandedAcronym = null;
export const genericIconName = 'package-x-generic';
export const aliasList = [];
export const subClassOfList = [];
export const magicList = [
  {
    priority: 45,
    matchList: [
      {
        type: 'string',
        value: '<ar>',
        offset: '0',
        mask: null,
        matchList: [],
      },
      {
        type: 'string',
        value: '!<arch>',
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
const glob0 = '*.a';
const glob1 = '*.ar';
const glob2 = '*.lib';

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
