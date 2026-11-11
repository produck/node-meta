/** The media type this record describes. */
export const mediaType = 'audio/x-tak';

export const commentList = ['TAK audio'];
export const acronym = 'TAK';
export const expandedAcronym = 'Tom\'s lossless Audio Kompressor';
export const genericIconName = null;
export const aliasList = [];
export const subClassOfList = [];
export const globList = [
  {
    pattern: '*.tak',
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
        value: 'tBaK',
        offset: '0',
        mask: null,
        matchList: [],
      },
    ],
  },
];
export const treeMagicList = [];
export const rootXmlList = [];
