/** The media type this record describes. */
export const mediaType = 'application/x-shorten';

export const commentList = ['Shorten audio'];
export const acronym = null;
export const expandedAcronym = null;
export const genericIconName = 'audio-x-generic';
export const aliasList = ['audio/x-shorten'];
export const subClassOfList = [];
export const globList = [
  {
    pattern: '*.shn',
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
        value: 'ajkg',
        offset: '0',
        mask: null,
        matchList: [],
      },
    ],
  },
];
export const treeMagicList = [];
export const rootXmlList = [];
