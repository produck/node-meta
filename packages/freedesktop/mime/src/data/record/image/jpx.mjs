/** The media type this record describes. */
export const mediaType = 'image/jpx';

export const commentList = ['JPEG-2000 JPX image'];
export const acronym = 'JPX';
export const expandedAcronym = 'JPEG-2000 eXtended';
export const genericIconName = null;
export const aliasList = [];
export const subClassOfList = [];
export const globList = [
  {
    pattern: '*.jpf',
    weight: null,
    caseSensitive: false,
  },
  {
    pattern: '*.jpx',
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
          '\\x00\\x00\\x00\\x0c\\x6a\\x50\\x20\\x20\\x0d\\x0a\\x87\\x0a        jpx\\x20',
        offset: '0',
        mask: '0xffffffffffffffffffffffff0000000000000000ffffffff',
        matchList: [],
      },
    ],
  },
];
export const treeMagicList = [];
export const rootXmlList = [];
