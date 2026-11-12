/** The media type this record describes. */
export const mediaType = 'application/x-starwriter-global';

export const commentList = ['StarWriter 4 master document'];
export const acronym = null;
export const expandedAcronym = null;
export const genericIconName = 'x-office-document';
export const aliasList = [];
export const subClassOfList = ['application/x-ole-storage'];
export const magicList = [
  {
    priority: 90,
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
              '\\x70\\xc9\\x0a\\x34\\x0d\\xe3\\xd0\\x11\\xa5\\x3f\\x00\\xa0\\x24\\x9d\\x57\\xb1',
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
const glob0 = '*.sgl';

export const globList = [
  {
    pattern: glob0,
    weight: 40,
    caseSensitive: false,
  },
];

export const globPatternList = [glob0];
