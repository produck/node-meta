/** The media type this record describes. */
export const mediaType = 'x-epoc/x-sisx-app';

export const commentList = ['SISX package'];
export const acronym = 'SIS';
export const expandedAcronym = 'Symbian Installation File';
export const genericIconName = 'package-x-generic';
export const aliasList = [];
export const subClassOfList = [];
export const globList = [
  {
    pattern: '*.sisx',
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
        value: '0x10201a7a',
        offset: '0',
        mask: null,
        matchList: [],
      },
    ],
  },
];
export const treeMagicList = [];
export const rootXmlList = [];
