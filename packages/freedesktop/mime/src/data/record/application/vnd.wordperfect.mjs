/** The media type this record describes. */
export const mediaType = 'application/vnd.wordperfect';

export const commentList = ['WordPerfect document'];
export const acronym = null;
export const expandedAcronym = null;
export const genericIconName = 'x-office-document';
export const aliasList = [
  'application/x-wordperfect',
  'application/wordperfect',
];
export const subClassOfList = [];
export const globList = [
  {
    pattern: '*.wp',
    weight: null,
    caseSensitive: false,
  },
  {
    pattern: '*.wp4',
    weight: null,
    caseSensitive: false,
  },
  {
    pattern: '*.wp5',
    weight: null,
    caseSensitive: false,
  },
  {
    pattern: '*.wp6',
    weight: null,
    caseSensitive: false,
  },
  {
    pattern: '*.wpd',
    weight: null,
    caseSensitive: false,
  },
  {
    pattern: '*.wpp',
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
        value: '\\xffWPC',
        offset: '0',
        mask: null,
        matchList: [
          {
            type: 'byte',
            value: '1',
            offset: '8',
            mask: null,
            matchList: [],
          },
        ],
      },
      {
        type: 'string',
        value: '\\xd0\\xcf\\x11\\xe0\\xa1\\xb1\\x1a\\xe1',
        offset: '0',
        mask: null,
        matchList: [
          {
            type: 'string',
            value:
              '\\xff\\x73\\x98\\x51\\xad\\x2d\\x20\\x02\\x19\\x37\\x00\\x00\\x92\\x96\\x79\\xcd',
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
