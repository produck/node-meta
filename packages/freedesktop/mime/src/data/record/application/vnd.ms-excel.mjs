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
export const globList = [
  {
    pattern: '*.xls',
    weight: null,
    caseSensitive: false,
  },
  {
    pattern: '*.xlc',
    weight: null,
    caseSensitive: false,
  },
  {
    pattern: '*.xll',
    weight: null,
    caseSensitive: false,
  },
  {
    pattern: '*.xlm',
    weight: null,
    caseSensitive: false,
  },
  {
    pattern: '*.xlw',
    weight: null,
    caseSensitive: false,
  },
  {
    pattern: '*.xla',
    weight: null,
    caseSensitive: false,
  },
  {
    pattern: '*.xlt',
    weight: null,
    caseSensitive: false,
  },
  {
    pattern: '*.xld',
    weight: null,
    caseSensitive: false,
  },
];
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
