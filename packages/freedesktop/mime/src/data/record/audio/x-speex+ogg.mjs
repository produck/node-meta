/** The media type this record describes. */
export const mediaType = 'audio/x-speex+ogg';

export const commentList = ['Ogg Speex audio'];
export const acronym = null;
export const expandedAcronym = null;
export const genericIconName = null;
export const aliasList = [];
export const subClassOfList = ['audio/ogg'];
export const globList = [
  {
    pattern: '*.oga',
    weight: null,
    caseSensitive: false,
  },
  {
    pattern: '*.ogg',
    weight: null,
    caseSensitive: false,
  },
  {
    pattern: '*.spx',
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
            value: 'Speex  ',
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
