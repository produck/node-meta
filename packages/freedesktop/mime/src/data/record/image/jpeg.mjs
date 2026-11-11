/** The media type this record describes. */
export const mediaType = 'image/jpeg';

export const commentList = ['JPEG image'];
export const acronym = 'JPEG';
export const expandedAcronym = 'Joint Photographic Experts Group';
export const genericIconName = null;
export const aliasList = ['image/pjpeg'];
export const subClassOfList = [];
export const globList = [
  {
    pattern: '*.jpg',
    weight: null,
    caseSensitive: false,
  },
  {
    pattern: '*.jpeg',
    weight: null,
    caseSensitive: false,
  },
  {
    pattern: '*.jpe',
    weight: null,
    caseSensitive: false,
  },
  {
    pattern: '*.jfif',
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
        value: '\\377\\330\\377',
        offset: '0',
        mask: null,
        matchList: [],
      },
      {
        type: 'big16',
        value: '0xffd8',
        offset: '0',
        mask: null,
        matchList: [],
      },
    ],
  },
];
export const treeMagicList = [];
export const rootXmlList = [];
