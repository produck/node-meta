/** The media type this record describes. */
export const mediaType = 'application/x-arj';

export const commentList = ['ARJ archive'];
export const acronym = 'ARJ';
export const expandedAcronym = 'Archived by Robert Jung';
export const genericIconName = 'package-x-generic';
export const aliasList = [];
export const subClassOfList = [];
export const magicList = [
  {
    priority: null,
    matchList: [
      {
        type: 'little16',
        value: '0xea60',
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
const glob0 = '*.arj';

export const globList = [
  {
    pattern: glob0,
    weight: null,
    caseSensitive: false,
  },
];

export const globPatternList = [glob0];
