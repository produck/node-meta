/** The media type this record describes. */
export const mediaType = 'image/x-panasonic-rw2';

export const commentList = ['Panasonic raw image'];
export const acronym = null;
export const expandedAcronym = null;
export const genericIconName = null;
export const aliasList = ['image/x-panasonic-raw2'];
export const subClassOfList = ['image/x-dcraw'];
export const magicList = [
  {
    priority: null,
    matchList: [
      {
        type: 'string',
        value: 'IIU\\x00\\x18\\x00\\x00\\x00',
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
const glob0 = '*.rw2';
const glob1 = '*.rwl';

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
];

export const globPatternList = [glob0, glob1];
