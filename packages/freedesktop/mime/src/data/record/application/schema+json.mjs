/** The media type this record describes. */
export const mediaType = 'application/schema+json';

export const commentList = ['JSON schema'];
export const acronym = null;
export const expandedAcronym = null;
export const genericIconName = 'text-x-script';
export const aliasList = [];
export const subClassOfList = ['application/json'];
export const magicList = [
  {
    priority: 80,
    matchList: [
      {
        type: 'string',
        value: '{',
        offset: '0',
        mask: null,
        matchList: [
          {
            type: 'string',
            value: '"$schema":',
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
const glob0 = '*.json';

export const globList = [
  {
    pattern: glob0,
    weight: null,
    caseSensitive: false,
  },
];

export const globPatternList = [glob0];
