/** The media type this record describes. */
export const mediaType = 'video/x-theora+ogg';

export const commentList = ['Ogg Theora video'];
export const acronym = null;
export const expandedAcronym = null;
export const genericIconName = null;
export const aliasList = ['video/x-theora'];
export const subClassOfList = ['video/ogg'];
export const globList = [
  {
    pattern: '*.ogg',
    weight: null,
    caseSensitive: false,
  },
];
export const magicList = [
  {
    priority: 80,
    matchList: [
      {
        type: 'string',
        value: 'OggS',
        offset: '0',
        mask: null,
        matchList: [
          {
            type: 'string',
            value: '\\x80theora',
            offset: '28',
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
