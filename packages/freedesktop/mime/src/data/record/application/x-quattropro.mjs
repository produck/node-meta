/** The media type this record describes. */
export const mediaType = 'application/x-quattropro';

export const commentList = ['Quattro Pro spreadsheet'];
export const acronym = null;
export const expandedAcronym = null;
export const genericIconName = 'x-office-spreadsheet';
export const aliasList = [];
export const subClassOfList = [];
export const globList = [
  {
    pattern: '*.wb1',
    weight: null,
    caseSensitive: false,
  },
  {
    pattern: '*.wb2',
    weight: null,
    caseSensitive: false,
  },
  {
    pattern: '*.wb3',
    weight: null,
    caseSensitive: false,
  },
  {
    pattern: '*.qpw',
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
              '\\x00\\xb4\\x02\\x00\\x00\\x00\\x00\\x00\\xc0\\x00\\x00\\x00\\x00\\x00\\x00\\x46',
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
