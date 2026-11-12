/** The media type this record describes. */
export const mediaType = 'image/x-applix-graphics';

export const commentList = ['Applix Graphics image'];
export const acronym = null;
export const expandedAcronym = null;
export const genericIconName = null;
export const aliasList = [];
export const subClassOfList = [];
export const magicList = [
  {
    priority: null,
    matchList: [
      {
        type: 'string',
        value: '*BEGIN',
        offset: '0',
        mask: null,
        matchList: [
          {
            type: 'string',
            value: 'GRAPHICS',
            offset: '7',
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
const glob0 = '*.ag';

export const globList = [
  {
    pattern: glob0,
    weight: null,
    caseSensitive: false,
  },
];

export const globPatternList = [glob0];
