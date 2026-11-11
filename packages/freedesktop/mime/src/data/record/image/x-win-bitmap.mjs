/** The media type this record describes. */
export const mediaType = 'image/x-win-bitmap';

export const commentList = ['Windows cursor'];
export const acronym = null;
export const expandedAcronym = null;
export const genericIconName = null;
export const aliasList = [];
export const subClassOfList = [];
export const globList = [
  {
    pattern: '*.cur',
    weight: null,
    caseSensitive: false,
  },
];
export const magicList = [
  {
    priority: null,
    matchList: [
      {
        type: 'string',
        value: '\\0\\0\\2\\0',
        offset: '0',
        mask: null,
        matchList: [
          {
            type: 'string',
            value: '\\0',
            offset: '5',
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
