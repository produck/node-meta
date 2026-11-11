/** The media type this record describes. */
export const mediaType = 'application/x-lmdb';

export const commentList = ['LMDB database'];
export const acronym = 'LMDB';
export const expandedAcronym = 'Lightning Memory-Mapped Database';
export const genericIconName = 'x-office-document';
export const aliasList = [];
export const subClassOfList = [];
export const globList = [
  {
    pattern: '*.mdb',
    weight: null,
    caseSensitive: false,
  },
  {
    pattern: '*.lmdb',
    weight: null,
    caseSensitive: false,
  },
];
export const magicList = [
  {
    priority: null,
    matchList: [
      {
        type: 'little32',
        value: '0xBEEFC0DE',
        offset: '16',
        mask: null,
        matchList: [],
      },
    ],
  },
];
export const treeMagicList = [];
export const rootXmlList = [];
