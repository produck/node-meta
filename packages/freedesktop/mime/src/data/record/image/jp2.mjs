/** The media type this record describes. */
export const mediaType = 'image/jp2';

export const commentList = ['JPEG-2000 JP2 image'];
export const acronym = 'JP2';
export const expandedAcronym = 'JPEG-2000';
export const genericIconName = null;
export const aliasList = [
  'image/jpeg2000',
  'image/jpeg2000-image',
  'image/x-jpeg2000-image',
];
export const subClassOfList = [];
export const globList = [
  {
    pattern: '*.jp2',
    weight: null,
    caseSensitive: false,
  },
  {
    pattern: '*.jpg2',
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
          '\\x00\\x00\\x00\\x0c\\x6a\\x50\\x20\\x20\\x0d\\x0a\\x87\\x0a        jp2\\x20',
        offset: '0',
        mask: '0xffffffffffffffffffffffff0000000000000000ffffffff',
        matchList: [],
      },
    ],
  },
];
export const treeMagicList = [];
export const rootXmlList = [];
