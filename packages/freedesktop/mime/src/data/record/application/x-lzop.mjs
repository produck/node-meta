/** The media type this record describes. */
export const mediaType = 'application/x-lzop';

export const commentList = ['LZO archive'];
export const acronym = 'LZO';
export const expandedAcronym = 'Lempel-Ziv-Oberhumer';
export const genericIconName = 'package-x-generic';
export const aliasList = [];
export const subClassOfList = [];
export const globList = [
  {
    pattern: '*.lzo',
    weight: null,
    caseSensitive: false,
  },
];
export const magicList = [
  {
    priority: 60,
    matchList: [
      {
        type: 'string',
        value: '\\x89\\x4c\\x5a\\x4f\\x00\\x0d\\x0a\\x1a\\x0a',
        offset: '0',
        mask: null,
        matchList: [],
      },
    ],
  },
];
export const treeMagicList = [];
export const rootXmlList = [];
