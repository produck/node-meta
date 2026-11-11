/** The media type this record describes. */
export const mediaType = 'image/tiff';

export const commentList = ['TIFF image'];
export const acronym = 'TIFF';
export const expandedAcronym = 'Tagged Image File Format';
export const genericIconName = null;
export const aliasList = [];
export const subClassOfList = [];
export const globList = [
  {
    pattern: '*.tif',
    weight: null,
    caseSensitive: false,
  },
  {
    pattern: '*.tiff',
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
        value: 'MM\\x00\\x2a',
        offset: '0',
        mask: null,
        matchList: [],
      },
      {
        type: 'string',
        value: 'II\\x2a\\x00',
        offset: '0',
        mask: null,
        matchList: [],
      },
    ],
  },
];
export const treeMagicList = [];
export const rootXmlList = [];
