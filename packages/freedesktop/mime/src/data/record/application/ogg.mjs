/** The media type this record describes. */
export const mediaType = 'application/ogg';

export const commentList = ['Ogg multimedia file'];
export const acronym = null;
export const expandedAcronym = null;
export const genericIconName = 'video-x-generic';
export const aliasList = ['application/x-ogg'];
export const subClassOfList = [];
export const globList = [
  {
    pattern: '*.ogx',
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
