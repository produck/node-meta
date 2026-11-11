/** The media type this record describes. */
export const mediaType = 'audio/mp4';

export const commentList = ['MPEG-4 audio'];
export const acronym = null;
export const expandedAcronym = null;
export const genericIconName = null;
export const aliasList = ['audio/x-m4a', 'audio/m4a'];
export const subClassOfList = [];
export const globList = [
  {
    pattern: '*.m4a',
    weight: null,
    caseSensitive: false,
  },
  {
    pattern: '*.f4a',
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
        value: 'ftypM4A',
        offset: '4',
        mask: null,
        matchList: [],
      },
    ],
  },
];
export const treeMagicList = [];
export const rootXmlList = [];
