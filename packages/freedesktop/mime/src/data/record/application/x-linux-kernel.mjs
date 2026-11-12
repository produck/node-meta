/** The media type this record describes. */
export const mediaType = 'application/x-linux-kernel';

export const commentList = ['Linux kernel'];
export const acronym = null;
export const expandedAcronym = null;
export const genericIconName = 'application-x-executable';
export const aliasList = [];
export const subClassOfList = ['application/x-executable'];
export const magicList = [
  {
    priority: null,
    matchList: [
      {
        type: 'string',
        value: 'HdrS',
        offset: '514',
        mask: null,
        matchList: [],
      },
      {
        type: 'little32',
        value: '0x016f2818',
        offset: '36',
        mask: null,
        matchList: [],
      },
      {
        type: 'big32',
        value: '0x016f2818',
        offset: '36',
        mask: null,
        matchList: [],
      },
      {
        type: 'string',
        value: 'ARMd',
        offset: '56',
        mask: null,
        matchList: [],
      },
      {
        type: 'string',
        value: 'RSC\\x05',
        offset: '56',
        mask: null,
        matchList: [],
      },
    ],
  },
];
export const treeMagicList = [];
export const rootXmlList = [];

/** About glob */
const glob0 = 'bzImage*';
const glob1 = 'zImage*';
const glob2 = 'vmlinux*';
const glob3 = 'vmlinuz*';

export const globList = [
  {
    pattern: glob0,
    weight: null,
    caseSensitive: true,
  },
  {
    pattern: glob1,
    weight: null,
    caseSensitive: true,
  },
  {
    pattern: glob2,
    weight: null,
    caseSensitive: true,
  },
  {
    pattern: glob3,
    weight: null,
    caseSensitive: true,
  },
];

export const globPatternList = [glob0, glob1, glob2, glob3];
