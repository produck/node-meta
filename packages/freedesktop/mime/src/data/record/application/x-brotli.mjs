/** The media type this record describes. */
export const mediaType = 'application/x-brotli';

export const commentList = ['Brotli archive'];
export const acronym = null;
export const expandedAcronym = null;
export const genericIconName = 'package-x-generic';
export const aliasList = ['application/brotli'];
export const subClassOfList = [];
export const globList = [
  {
    pattern: '*.br',
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
        value: '\\xce\\xb2\\xcf\\x81',
        offset: '0',
        mask: null,
        matchList: [],
      },
    ],
  },
];
export const treeMagicList = [];
export const rootXmlList = [];
