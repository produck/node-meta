/** The media type this record describes. */
export const mediaType = 'image/gif';

export const commentList = ['GIF image'];
export const acronym = 'GIF';
export const expandedAcronym = 'Graphics Interchange Format';
export const genericIconName = null;
export const aliasList = [];
export const subClassOfList = [];
export const globList = [
  {
    pattern: '*.gif',
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
        value: 'GIF8',
        offset: '0',
        mask: null,
        matchList: [],
      },
    ],
  },
];
export const treeMagicList = [];
export const rootXmlList = [];
