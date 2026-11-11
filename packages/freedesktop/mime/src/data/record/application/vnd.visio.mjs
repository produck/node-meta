/** The media type this record describes. */
export const mediaType = 'application/vnd.visio';

export const commentList = ['Microsoft Visio document'];
export const acronym = null;
export const expandedAcronym = null;
export const genericIconName = 'x-office-document';
export const aliasList = [];
export const subClassOfList = ['application/x-ole-storage'];
export const globList = [
  {
    pattern: '*.vsd',
    weight: null,
    caseSensitive: false,
  },
  {
    pattern: '*.vst',
    weight: null,
    caseSensitive: false,
  },
  {
    pattern: '*.vsw',
    weight: null,
    caseSensitive: false,
  },
  {
    pattern: '*.vss',
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
              '\\x13\\x1a\\x02\\x00\\x00\\x00\\x00\\x00\\xc0\\x00\\x00\\x00\\x00\\x00\\x00\\x46',
            offset: '592:8192',
            mask: null,
            matchList: [],
          },
          {
            type: 'string',
            value:
              '\\x14\\x1a\\x02\\x00\\x00\\x00\\x00\\x00\\xc0\\x00\\x00\\x00\\x00\\x00\\x00\\x46',
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
