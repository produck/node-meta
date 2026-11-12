/** The media type this record describes. */
export const mediaType = 'application/x-lx-executable';

export const commentList = ['32-bit DOS executable'];
export const acronym = 'DOS';
export const expandedAcronym = 'Disk Operating System';
export const genericIconName = 'application-x-executable';
export const aliasList = [];
export const subClassOfList = ['application/x-msdownload'];
export const magicList = [
  {
    priority: null,
    matchList: [
      {
        type: 'string',
        value: 'LE',
        offset: '0',
        mask: null,
        matchList: [],
      },
      {
        type: 'string',
        value: 'LX',
        offset: '0',
        mask: null,
        matchList: [],
      },
    ],
  },
  {
    priority: 70,
    matchList: [
      {
        type: 'string',
        value: 'MZ',
        offset: '0',
        mask: null,
        matchList: [
          {
            type: 'string',
            value: 'LE',
            offset: '64:1024',
            mask: null,
            matchList: [],
          },
          {
            type: 'string',
            value: 'LX',
            offset: '64:1024',
            mask: null,
            matchList: [],
          },
        ],
      },
    ],
  },
];
export const treeMagicList = [];
export const rootXmlList = [];

/** About glob */
const glob0 = '*.exe';
const glob1 = '*.386';
const glob2 = '*.dll';
const glob3 = '*.sys';
const glob4 = '*.vxd';

export const globList = [
  {
    pattern: glob0,
    weight: 10,
    caseSensitive: false,
  },
  {
    pattern: glob1,
    weight: 10,
    caseSensitive: false,
  },
  {
    pattern: glob2,
    weight: 10,
    caseSensitive: false,
  },
  {
    pattern: glob3,
    weight: 10,
    caseSensitive: false,
  },
  {
    pattern: glob4,
    weight: 10,
    caseSensitive: false,
  },
];

export const globPatternList = [glob0, glob1, glob2, glob3, glob4];
