/** The media type this record describes. */
export const mediaType = 'application/x-stardraw';

export const commentList = ['StarDraw 4 drawing'];
export const acronym = null;
export const expandedAcronym = null;
export const genericIconName = 'image-x-generic';
export const aliasList = [];
export const subClassOfList = ['application/x-ole-storage'];
export const globList = [
  {
    pattern: '*.sda',
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
              '\\xe0\\xaa\\x10\\xaf\\x6d\\xb3\\x1b\\x10\\x99\\x61\\x04\\x02\\x1c\\x00\\x70\\x02',
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
