/** The media type this record describes. */
export const mediaType = 'application/x-starcalc';

export const commentList = ['StarCalc 3-4 spreadsheet'];
export const acronym = null;
export const expandedAcronym = null;
export const genericIconName = 'x-office-spreadsheet';
export const aliasList = [];
export const subClassOfList = ['application/x-ole-storage'];
export const globList = [
  {
    pattern: '*.sdc',
    weight: 40,
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
              '\\x41\\xd4\\x61\\x63\\x35\\x42\\xd0\\x11\\x89\\xcb\\x00\\x80\\x29\\xe4\\xb0\\xb1',
            offset: '592:8192',
            mask: null,
            matchList: [],
          },
          {
            type: 'string',
            value:
              '\\xa0\\x3f\\x54\\x3f\\xa6\\xb6\\x1b\\x10\\x99\\x61\\x04\\x02\\x1c\\x00\\x70\\x02',
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
