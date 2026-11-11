/** The media type this record describes. */
export const mediaType = 'application/x-lx-executable';

export const commentList = ['32-bit DOS executable'];
export const acronym = 'DOS';
export const expandedAcronym = 'Disk Operating System';
export const genericIconName = 'application-x-executable';
export const aliasList = [];
export const subClassOfList = ['application/x-msdownload'];
export const globList = [
  {
    pattern: '*.exe',
    weight: 10,
    caseSensitive: false,
  },
  {
    pattern: '*.386',
    weight: 10,
    caseSensitive: false,
  },
  {
    pattern: '*.dll',
    weight: 10,
    caseSensitive: false,
  },
  {
    pattern: '*.sys',
    weight: 10,
    caseSensitive: false,
  },
  {
    pattern: '*.vxd',
    weight: 10,
    caseSensitive: false,
  },
];
export const magicList = [
  {
    priority: null,
    matchList: [
      {
        type: 'string',
        value: 'LE',
        offset: '0',
        mask: null,
        matchList: [],
      },
      {
        type: 'string',
        value: 'LX',
        offset: '0',
        mask: null,
        matchList: [],
      },
    ],
  },
  {
    priority: 70,
    matchList: [
      {
        type: 'string',
        value: 'MZ',
        offset: '0',
        mask: null,
        matchList: [
          {
            type: 'string',
            value: 'LE',
            offset: '64:1024',
            mask: null,
            matchList: [],
          },
          {
            type: 'string',
            value: 'LX',
            offset: '64:1024',
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
