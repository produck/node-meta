/** The media type this record describes. */
export const mediaType = 'application/x-compressed-iso';

export const commentList = ['Compressed CD image'];
export const acronym = null;
export const expandedAcronym = null;
export const genericIconName = 'media-optical';
export const aliasList = [];
export const subClassOfList = [];
export const globList = [
  {
    pattern: '*.cso',
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
        value: 'CISO',
        offset: '0',
        mask: null,
        matchList: [],
      },
    ],
  },
];
export const treeMagicList = [];
export const rootXmlList = [];
