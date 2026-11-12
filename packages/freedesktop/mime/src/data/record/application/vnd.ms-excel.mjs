/** The media type this record describes. */
export const mediaType = 'application/vnd.ms-excel';

export const commentList = ['Excel spreadsheet'];
export const acronym = null;
export const expandedAcronym = null;
export const genericIconName = 'x-office-spreadsheet';
export const aliasList = [
  'application/msexcel',
  'application/x-msexcel',
  'zz-application/zz-winassoc-xls',
];
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
              '\\x10\\x08\\x02\\x00\\x00\\x00\\x00\\x00\\xc0\\x00\\x00\\x00\\x00\\x00\\x00\\x46',
            offset: '592:8192',
            mask: null,
            matchList: [],
          },
          {
            type: 'string',
            value:
              '\\x20\\x08\\x02\\x00\\x00\\x00\\x00\\x00\\xc0\\x00\\x00\\x00\\x00\\x00\\x00\\x46',
            offset: '592:8192',
            mask: null,
            matchList: [],
          },
        ],
      },
      {
        type: 'string',
        value: 'Microsoft Excel 5.0 Worksheet',
        offset: '2080',
        mask: null,
        matchList: [],
      },
    ],
  },
];
export const treeMagicList = [];
export const rootXmlList = [];

/** About glob */
const glob0 = '*.xls';
const glob1 = '*.xlc';
const glob2 = '*.xll';
const glob3 = '*.xlm';
const glob4 = '*.xlw';
const glob5 = '*.xla';
const glob6 = '*.xlt';
const glob7 = '*.xld';

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
  {
    pattern: glob4,
    weight: null,
    caseSensitive: false,
  },
  {
    pattern: glob5,
    weight: null,
    caseSensitive: false,
  },
  {
    pattern: glob6,
    weight: null,
    caseSensitive: false,
  },
  {
    pattern: glob7,
    weight: null,
    caseSensitive: false,
  },
];

export const globPatternList = [
  glob0,
  glob1,
  glob2,
  glob3,
  glob4,
  glob5,
  glob6,
  glob7,
];
