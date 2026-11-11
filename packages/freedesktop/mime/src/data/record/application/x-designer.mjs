/** The media type this record describes. */
export const mediaType = 'application/x-designer';

export const commentList = ['Qt Designer interface document'];
export const acronym = null;
export const expandedAcronym = null;
export const genericIconName = 'x-office-document';
export const aliasList = [];
export const subClassOfList = ['application/xml'];
export const globList = [
  {
    pattern: '*.ui',
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
        value: '<ui ',
        offset: '0:256',
        mask: null,
        matchList: [],
      },
      {
        type: 'string',
        value: '<UI ',
        offset: '0:256',
        mask: null,
        matchList: [],
      },
    ],
  },
];
export const treeMagicList = [];
export const rootXmlList = [];
