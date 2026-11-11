/** The media type this record describes. */
export const mediaType = 'image/x-canon-crw';

export const commentList = ['Canon CRW raw image'];
export const acronym = 'CRW';
export const expandedAcronym = 'Canon RaW';
export const genericIconName = null;
export const aliasList = [];
export const subClassOfList = ['image/x-dcraw'];
export const globList = [
  {
    pattern: '*.crw',
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
        value: 'II\\x1a\\x00\\x00\\x00HEAPCCDR',
        offset: '0',
        mask: null,
        matchList: [],
      },
    ],
  },
];
export const treeMagicList = [];
export const rootXmlList = [];
