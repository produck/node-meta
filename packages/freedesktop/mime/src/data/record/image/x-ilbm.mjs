/** The media type this record describes. */
export const mediaType = 'image/x-ilbm';

export const commentList = ['ILBM image'];
export const acronym = 'ILBM';
export const expandedAcronym = 'InterLeaved BitMap';
export const genericIconName = null;
export const aliasList = ['image/x-iff'];
export const subClassOfList = ['application/x-iff'];
export const globList = [
  {
    pattern: '*.iff',
    weight: null,
    caseSensitive: false,
  },
  {
    pattern: '*.ilbm',
    weight: null,
    caseSensitive: false,
  },
  {
    pattern: '*.lbm',
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
        value: 'ILBM',
        offset: '8',
        mask: null,
        matchList: [],
      },
      {
        type: 'string',
        value: 'PBM ',
        offset: '8',
        mask: null,
        matchList: [],
      },
    ],
  },
];
export const treeMagicList = [];
export const rootXmlList = [];
