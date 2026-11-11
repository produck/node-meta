/** The media type this record describes. */
export const mediaType = 'image/webp';

export const commentList = ['WebP image'];
export const acronym = null;
export const expandedAcronym = null;
export const genericIconName = null;
export const aliasList = [];
export const subClassOfList = ['application/x-riff'];
export const globList = [
  {
    pattern: '*.webp',
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
        value: 'RIFF',
        offset: '0',
        mask: null,
        matchList: [
          {
            type: 'string',
            value: 'WEBP',
            offset: '8',
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
