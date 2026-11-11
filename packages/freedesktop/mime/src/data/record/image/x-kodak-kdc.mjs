/** The media type this record describes. */
export const mediaType = 'image/x-kodak-kdc';

export const commentList = ['Kodak KDC raw image'];
export const acronym = 'KDC';
export const expandedAcronym = 'Kodak Digital Camera';
export const genericIconName = null;
export const aliasList = [];
export const subClassOfList = ['image/x-dcraw', 'image/tiff'];
export const globList = [
  {
    pattern: '*.kdc',
    weight: null,
    caseSensitive: false,
  },
];
export const magicList = [
  {
    priority: 80,
    matchList: [
      {
        type: 'string',
        value: 'EASTMAN KODAK COMPANY',
        offset: '242',
        mask: null,
        matchList: [],
      },
    ],
  },
];
export const treeMagicList = [];
export const rootXmlList = [];
