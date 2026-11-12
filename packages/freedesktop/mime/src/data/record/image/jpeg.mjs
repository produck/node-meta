/** The media type this record describes. */
export const mediaType = 'image/jpeg';

export const commentList = ['JPEG image'];
export const acronym = 'JPEG';
export const expandedAcronym = 'Joint Photographic Experts Group';
export const genericIconName = null;
export const aliasList = ['image/pjpeg'];
export const subClassOfList = [];
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

/** About glob */
const glob0 = '*.jpg';
const glob1 = '*.jpeg';
const glob2 = '*.jpe';
const glob3 = '*.jfif';

export const globList = [
  {
    pattern: glob0,
    weight: null,
    caseSensitive: false,
  },
  {
    pattern: glob1,
    weight: null,
    caseSensitive: false,
  },
  {
    pattern: glob2,
    weight: null,
    caseSensitive: false,
  },
  {
    pattern: glob3,
    weight: null,
    caseSensitive: false,
  },
];

export const globPatternList = [glob0, glob1, glob2, glob3];
