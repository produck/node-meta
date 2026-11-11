/** The media type this record describes. */
export const mediaType = 'video/mj2';

export const commentList = ['JPEG-2000 MJ2 video'];
export const acronym = 'MJ2';
export const expandedAcronym = 'Motion JPEG-2000';
export const genericIconName = null;
export const aliasList = [];
export const subClassOfList = [];
export const globList = [
  {
    pattern: '*.mj2',
    weight: null,
    caseSensitive: false,
  },
  {
    pattern: '*.mjp2',
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
          '\\x00\\x00\\x00\\x0c\\x6a\\x50\\x20\\x20\\x0d\\x0a\\x87\\x0a        mjp2',
        offset: '0',
        mask: '0xffffffffffffffffffffffff0000000000000000ffffffff',
        matchList: [],
      },
    ],
  },
];
export const treeMagicList = [];
export const rootXmlList = [];
