/** The media type this record describes. */
export const mediaType = 'image/jxr';

export const commentList = ['JPEG XR image'];
export const acronym = 'XR';
export const expandedAcronym = 'Extended Range';
export const genericIconName = null;
export const aliasList = ['image/vnd.ms-photo'];
export const subClassOfList = [];
export const globList = [
  {
    pattern: '*.jxr',
    weight: null,
    caseSensitive: false,
  },
  {
    pattern: '*.hdp',
    weight: null,
    caseSensitive: false,
  },
  {
    pattern: '*.wdp',
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
        value: 'II\\xBC\\x01',
        offset: '0',
        mask: null,
        matchList: [],
      },
    ],
  },
];
export const treeMagicList = [];
export const rootXmlList = [];
