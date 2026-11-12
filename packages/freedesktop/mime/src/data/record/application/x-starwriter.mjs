/** The media type this record describes. */
export const mediaType = 'application/x-starwriter';

export const commentList = ['StarWriter 3-4 document'];
export const acronym = null;
export const expandedAcronym = null;
export const genericIconName = 'x-office-document';
export const aliasList = [];
export const subClassOfList = ['application/x-ole-storage'];
export const magicList = [
  {
    priority: 90,
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
              '\\x40\\x7e\\x5c\\xdc\\x5c\\xb3\\x1b\\x10\\x99\\x61\\x04\\x02\\x1c\\x00\\x70\\x02',
            offset: '592:8192',
            mask: null,
            matchList: [],
          },
          {
            type: 'string',
            value:
              '\\xb0\\xe9\\x04\\x8b\\x0e\\x42\\xd0\\x11\\xa4\\x5e\\x00\\xa0\\x24\\x9d\\x57\\xb1',
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
const glob0 = '*.sdw';
const glob1 = '*.vor';

export const globList = [
  {
    pattern: glob0,
    weight: 40,
    caseSensitive: false,
  },
  {
    pattern: glob1,
    weight: 40,
    caseSensitive: false,
  },
];

export const globPatternList = [glob0, glob1];
