/** The media type this record describes. */
export const mediaType = 'video/x-ogm+ogg';

export const commentList = ['OGM video'];
export const acronym = null;
export const expandedAcronym = null;
export const genericIconName = null;
export const aliasList = ['video/x-ogm'];
export const subClassOfList = ['video/ogg'];
export const globList = [
  {
    pattern: '*.ogm',
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
            value: 'video',
            offset: '29',
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
