/** The media type this record describes. */
export const mediaType = 'application/x-tiled-tsx';

export const commentList = ['Tiled tileset files'];
export const acronym = null;
export const expandedAcronym = null;
export const genericIconName = null;
export const aliasList = [];
export const subClassOfList = ['application/xml'];
export const magicList = [
  {
    priority: null,
    matchList: [
      {
        type: 'string',
        value: '<tileset ',
        offset: '0:256',
        mask: null,
        matchList: [],
      },
    ],
  },
];
export const treeMagicList = [];
export const rootXmlList = [];

/** About glob */
const glob0 = '*.tsx';

export const globList = [
  {
    pattern: glob0,
    weight: 40,
    caseSensitive: false,
  },
];

export const globPatternList = [glob0];
