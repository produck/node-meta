/** The media type this record describes. */
export const mediaType = 'application/x-genesis-32x-rom';

export const commentList = ['Genesis 32X ROM'];
export const acronym = null;
export const expandedAcronym = null;
export const genericIconName = 'application-x-executable';
export const aliasList = [];
export const subClassOfList = [];
export const magicList = [
  {
    priority: 60,
    matchList: [
      {
        type: 'string',
        value: 'SEGA 32X',
        offset: '256',
        mask: null,
        matchList: [],
      },
      {
        type: 'string',
        value: 'SEGA SUPER 32X',
        offset: '256',
        mask: null,
        matchList: [],
      },
    ],
  },
];
export const treeMagicList = [];
export const rootXmlList = [];

/** About glob */
const glob0 = '*.32x';
const glob1 = '*.mdx';

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
