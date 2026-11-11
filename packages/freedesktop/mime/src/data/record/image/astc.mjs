/** The media type this record describes. */
export const mediaType = 'image/astc';

export const commentList = ['ASTC texture'];
export const acronym = 'ASTC';
export const expandedAcronym = 'Advanced Scalable Texture Compression';
export const genericIconName = null;
export const aliasList = [];
export const subClassOfList = [];
export const globList = [
  {
    pattern: '*.astc',
    weight: null,
    caseSensitive: false,
  },
];
export const magicList = [
  {
    priority: 80,
    matchList: [
      {
        type: 'little32',
        value: '0x5CA1AB13',
        offset: '0',
        mask: null,
        matchList: [],
      },
    ],
  },
];
export const treeMagicList = [];
export const rootXmlList = [];
