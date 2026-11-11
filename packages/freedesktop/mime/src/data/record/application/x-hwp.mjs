/** The media type this record describes. */
export const mediaType = 'application/x-hwp';

export const commentList = ['Hancom HWP document'];
export const acronym = null;
export const expandedAcronym = null;
export const genericIconName = 'x-office-document';
export const aliasList = ['application/vnd.haansoft-hwp'];
export const subClassOfList = [];
export const globList = [
  {
    pattern: '*.hwp',
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
        value: 'HWP Document File',
        offset: '0',
        mask: null,
        matchList: [],
      },
    ],
  },
];
export const treeMagicList = [];
export const rootXmlList = [];
