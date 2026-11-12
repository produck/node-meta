/** The media type this record describes. */
export const mediaType = 'application/x-starmath';

export const commentList = ['StarMath 3-4 formula'];
export const acronym = null;
export const expandedAcronym = null;
export const genericIconName = 'x-office-document';
export const aliasList = [];
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
              '\\x60\\x04\\x59\\xd4\\xfd\\x35\\x1c\\x10\\xb1\\x2a\\x04\\x02\\x1c\\x00\\x70\\x02',
            offset: '592:8192',
            mask: null,
            matchList: [],
          },
          {
            type: 'string',
            value:
              '\\xe1\\xb7\\xb3\\x02\\x25\\x42\\xd0\\x11\\x89\\xca\\x00\\x80\\x29\\xe4\\xb0\\xb1',
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
const glob0 = '*.smf';

export const globList = [
  {
    pattern: glob0,
    weight: 40,
    caseSensitive: false,
  },
];

export const globPatternList = [glob0];
