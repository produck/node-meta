/** The media type this record describes. */
export const mediaType = 'audio/ogg';

export const commentList = ['Ogg audio'];
export const acronym = null;
export const expandedAcronym = null;
export const genericIconName = null;
export const aliasList = ['audio/x-ogg'];
export const subClassOfList = ['application/ogg'];
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
    pattern: '*.opus',
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
        value: 'OggS',
        offset: '0',
        mask: null,
        matchList: [],
      },
    ],
  },
];
export const treeMagicList = [];
export const rootXmlList = [];
