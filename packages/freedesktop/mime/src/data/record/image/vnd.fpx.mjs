/** The media type this record describes. */
export const mediaType = 'image/vnd.fpx';

export const commentList = ['FlashPix image'];
export const acronym = null;
export const expandedAcronym = null;
export const genericIconName = null;
export const aliasList = ['image/x-fpx'];
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
              '\\x00\\x67\\x61\\x56\\x54\\xc1\\xce\\x11\\x85\\x53\\x00\\xaa\\x00\\xa1\\xf9\\x5b',
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
const glob0 = '*.fpx';

export const globList = [
  {
    pattern: glob0,
    weight: null,
    caseSensitive: false,
  },
];

export const globPatternList = [glob0];
