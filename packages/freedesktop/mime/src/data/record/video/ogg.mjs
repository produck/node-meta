/** The media type this record describes. */
export const mediaType = 'video/ogg';

export const commentList = ['Ogg video'];
export const acronym = null;
export const expandedAcronym = null;
export const genericIconName = null;
export const aliasList = ['video/x-ogg'];
export const subClassOfList = ['application/ogg'];
export const globList = [
  {
    pattern: '*.ogv',
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
