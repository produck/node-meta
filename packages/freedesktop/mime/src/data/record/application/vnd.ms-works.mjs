/** The media type this record describes. */
export const mediaType = 'application/vnd.ms-works';

export const commentList = ['Microsoft Works document'];
export const acronym = null;
export const expandedAcronym = null;
export const genericIconName = 'x-office-document';
export const aliasList = [];
export const subClassOfList = ['application/x-ole-storage'];
export const globList = [
  {
    pattern: '*.wcm',
    weight: null,
    caseSensitive: false,
  },
  {
    pattern: '*.wdb',
    weight: null,
    caseSensitive: false,
  },
  {
    pattern: '*.wks',
    weight: null,
    caseSensitive: false,
  },
  {
    pattern: '*.wps',
    weight: null,
    caseSensitive: false,
  },
  {
    pattern: '*.xlr',
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
              '\\x02\\x13\\x02\\x00\\x00\\x00\\x00\\x00\\xc0\\x00\\x00\\x00\\x00\\x00\\x00\\x46',
            offset: '592:8192',
            mask: null,
            matchList: [],
          },
          {
            type: 'string',
            value:
              '\\x03\\x13\\x02\\x00\\x00\\x00\\x00\\x00\\xc0\\x00\\x00\\x00\\x00\\x00\\x00\\x46',
            offset: '592:8192',
            mask: null,
            matchList: [],
          },
          {
            type: 'string',
            value:
              '\\xb2\\x5a\\xa4\\x0e\\x0a\\x9e\\xd1\\x11\\xa4\\x07\\x00\\xc0\\x4f\\xb9\\x32\\xba',
            offset: '592:8192',
            mask: null,
            matchList: [],
          },
          {
            type: 'string',
            value:
              '\\xc0\\xc7\\x26\\x6e\\xb9\\x8c\\xd3\\x11\\xa1\\xc8\\x00\\xc0\\x4f\\x61\\x24\\x52',
            offset: '592:8192',
            mask: null,
            matchList: [],
          },
          {
            type: 'string',
            value:
              '\\xc2\\xdb\\xcd\\x28\\xe2\\x0a\\xce\\x11\\xa2\\x9a\\x00\\xaa\\x00\\x4a\\x1a\\x72',
            offset: '592:8192',
            mask: null,
            matchList: [],
          },
          {
            type: 'string',
            value:
              '\\xc3\\xdb\\xcd\\x28\\xe2\\x0a\\xce\\x11\\xa2\\x9a\\x00\\xaa\\x00\\x4a\\x1a\\x72',
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
