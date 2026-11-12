/** The media type this record describes. */
export const mediaType = 'application/x-starchart';

export const commentList = ['StarChart 3-4 chart'];
export const acronym = null;
export const expandedAcronym = null;
export const genericIconName = 'x-office-spreadsheet';
export const aliasList = [];
export const subClassOfList = ['application/x-ole-storage'];
export const magicList = [
  {
    priority: 60,
    matchList: [
      {
        type: 'string',
        value: '\\xd0\\xcf\\x11\\xe0\\xa1\\xb1\\x1a\\xe1',
        offset: '0',
        mask: null,
        matchList: [
          {
            type: 'string',
            value:
              '\\xe0\\x99\\x9c\\xfb\\x6d\\x2c\\x1c\\x10\\x8e\\x2c\\x00\\x00\\x1b\\x4c\\xc7\\x11',
            offset: '592:8192',
            mask: null,
            matchList: [],
          },
          {
            type: 'string',
            value:
              '\\xe0\\xb7\\xb3\\x02\\x25\\x42\\xd0\\x11\\x89\\xca\\x00\\x80\\x29\\xe4\\xb0\\xb1',
            offset: '592:8192',
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
const glob0 = '*.sds';

export const globList = [
  {
    pattern: glob0,
    weight: 40,
    caseSensitive: false,
  },
];

export const globPatternList = [glob0];
