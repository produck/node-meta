/** The media type this record describes. */
export const mediaType = 'image/x-xv-thumbnail';

export const commentList = ['xv thumbnail'];
export const acronym = 'XV';
export const expandedAcronym = 'XV image viewer';
export const genericIconName = null;
export const aliasList = [];
export const subClassOfList = [];
export const globList = [
  {
    pattern: '*.p7',
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
        value: 'P7 332\\x0a',
        offset: '0',
        mask: null,
        matchList: [],
      },
    ],
  },
];
export const treeMagicList = [];
export const rootXmlList = [];
