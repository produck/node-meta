/** The media type this record describes. */
export const mediaType = 'application/vnd.stardivision.calc';

export const commentList = ['StarCalc 5 spreadsheet'];
export const acronym = null;
export const expandedAcronym = null;
export const genericIconName = 'x-office-spreadsheet';
export const aliasList = [];
export const subClassOfList = ['application/x-ole-storage'];
export const globList = [
  {
    pattern: '*.sdc',
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
              '\\x61\\xb8\\xa5\\xc6\\xd6\\x85\\xd1\\x11\\x89\\xcb\\x00\\x80\\x29\\xe4\\xb0\\xb1',
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
