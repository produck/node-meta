/** The media type this record describes. */
export const mediaType = 'image/x-applix-graphics';

export const commentList = ['Applix Graphics image'];
export const acronym = null;
export const expandedAcronym = null;
export const genericIconName = null;
export const aliasList = [];
export const subClassOfList = [];
export const globList = [
  {
    pattern: '*.ag',
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
