/** The media type this record describes. */
export const mediaType = 'image/jpm';

export const commentList = ['JPEG-2000 JPM image'];
export const acronym = 'JPM';
export const expandedAcronym = 'JPEG-2000 Mixed';
export const genericIconName = null;
export const aliasList = [];
export const subClassOfList = [];
export const globList = [
  {
    pattern: '*.jpm',
    weight: null,
    caseSensitive: false,
  },
  {
    pattern: '*.jpgm',
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
        value:
          '\\x00\\x00\\x00\\x0c\\x6a\\x50\\x20\\x20\\x0d\\x0a\\x87\\x0a        jpm\\x20',
        offset: '0',
        mask: '0xffffffffffffffffffffffff0000000000000000ffffffff',
        matchList: [],
      },
    ],
  },
];
export const treeMagicList = [];
export const rootXmlList = [];
