/** The media type this record describes. */
export const mediaType = 'audio/vorbis';

export const commentList = ['Ogg Vorbis audio'];
export const acronym = null;
export const expandedAcronym = null;
export const genericIconName = null;
export const aliasList = ['audio/x-vorbis+ogg', 'audio/x-vorbis'];
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
            value: '\\x01vorbis',
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
