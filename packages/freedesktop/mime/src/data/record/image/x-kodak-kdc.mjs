/** The media type this record describes. */
export const mediaType = 'image/x-kodak-kdc';

export const commentList = ['Kodak KDC raw image'];
export const acronym = 'KDC';
export const expandedAcronym = 'Kodak Digital Camera';
export const genericIconName = null;
export const aliasList = [];
export const subClassOfList = ['image/x-dcraw', 'image/tiff'];
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

/** About glob */
const glob0 = '*.kdc';

export const globList = [
  {
    pattern: glob0,
    weight: null,
    caseSensitive: false,
  },
];

export const globPatternList = [glob0];
