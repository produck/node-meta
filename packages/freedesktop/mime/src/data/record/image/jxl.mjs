/** The media type this record describes. */
export const mediaType = 'image/jxl';

export const commentList = ['JPEG XL image'];
export const acronym = null;
export const expandedAcronym = null;
export const genericIconName = null;
export const aliasList = [];
export const subClassOfList = [];
export const globList = [
  {
    pattern: '*.jxl',
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
        value: '\\xFF\\x0A',
        offset: '0',
        mask: null,
        matchList: [],
      },
      {
        type: 'string',
        value: '\\0\\0\\0\\x0CJXL \\x0D\\x0A\\x87\\x0A',
        offset: '0',
        mask: null,
        matchList: [],
      },
    ],
  },
];
export const treeMagicList = [];
export const rootXmlList = [];
