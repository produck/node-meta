/** The media type this record describes. */
export const mediaType = 'audio/x-m4b';

export const commentList = ['MPEG-4 audio book'];
export const acronym = null;
export const expandedAcronym = null;
export const genericIconName = null;
export const aliasList = [];
export const subClassOfList = ['audio/mp4'];
export const globList = [
  {
    pattern: '*.m4b',
    weight: null,
    caseSensitive: false,
  },
  {
    pattern: '*.f4b',
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
        value: 'ftypM4B',
        offset: '4',
        mask: null,
        matchList: [],
      },
    ],
  },
];
export const treeMagicList = [];
export const rootXmlList = [];
