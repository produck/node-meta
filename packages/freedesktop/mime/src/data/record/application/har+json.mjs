/** The media type this record describes. */
export const mediaType = 'application/har+json';

export const commentList = ['HTTP archive'];
export const acronym = null;
export const expandedAcronym = null;
export const genericIconName = 'package-x-generic';
export const aliasList = [];
export const subClassOfList = ['application/json'];
export const globList = [
  {
    pattern: '*.har',
    weight: null,
    caseSensitive: false,
  },
];
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
