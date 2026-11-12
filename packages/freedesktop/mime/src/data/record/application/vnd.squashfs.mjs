/** The media type this record describes. */
export const mediaType = 'application/vnd.squashfs';

export const commentList = ['Squashfs filesystem image'];
export const acronym = null;
export const expandedAcronym = null;
export const genericIconName = null;
export const aliasList = [];
export const subClassOfList = ['application/vnd.efi.img'];
export const magicList = [
  {
    priority: null,
    matchList: [
      {
        type: 'string',
        value: 'hsqs',
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
const glob0 = '*.sfs';
const glob1 = '*.sqfs';
const glob2 = '*.sqsh';
const glob3 = '*.squashfs';

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
