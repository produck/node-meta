/** The media type this record describes. */
export const mediaType = 'application/har+json';

export const commentList = ['HTTP archive'];
export const acronym = null;
export const expandedAcronym = null;
export const genericIconName = 'package-x-generic';
export const aliasList = [];
export const subClassOfList = ['application/json'];
export const magicList = [
  {
    priority: 10,
    matchList: [
      {
        type: 'string',
        value: '{',
        offset: '0',
        mask: null,
        matchList: [
          {
            type: 'string',
            value: '"log":',
            offset: '1:256',
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
const glob0 = '*.har';

export const globList = [
  {
    pattern: glob0,
    weight: null,
    caseSensitive: false,
  },
];

export const globPatternList = [glob0];
