/** The media type this record describes. */
export const mediaType = 'application/x-saturn-rom';

export const commentList = ['Sega Saturn disc image'];
export const acronym = null;
export const expandedAcronym = null;
export const genericIconName = 'application-x-executable';
export const aliasList = [];
export const subClassOfList = [];
export const magicList = [
  {
    priority: null,
    matchList: [
      {
        type: 'string',
        value: 'SEGA SEGASATURN',
        offset: '0',
        mask: null,
        matchList: [],
      },
      {
        type: 'string',
        value: 'SEGA SEGASATURN',
        offset: '16',
        mask: null,
        matchList: [],
      },
    ],
  },
];
export const treeMagicList = [];
export const rootXmlList = [];

/** About glob */
const glob0 = '*.iso';

export const globList = [
  {
    pattern: glob0,
    weight: null,
    caseSensitive: false,
  },
];

export const globPatternList = [glob0];
