/** The media type this record describes. */
export const mediaType = 'application/x-ms-ne-executable';

export const commentList = ['16-bit Windows program'];
export const acronym = null;
export const expandedAcronym = null;
export const genericIconName = 'application-x-executable';
export const aliasList = [];
export const subClassOfList = ['application/x-msdownload'];
export const globList = [
  {
    pattern: '*.exe',
    weight: 20,
    caseSensitive: false,
  },
  {
    pattern: '*.dll',
    weight: 20,
    caseSensitive: false,
  },
  {
    pattern: '*.cpl',
    weight: 20,
    caseSensitive: false,
  },
  {
    pattern: '*.drv',
    weight: 20,
    caseSensitive: false,
  },
  {
    pattern: '*.scr',
    weight: 20,
    caseSensitive: false,
  },
];
export const magicList = [
  {
    priority: 80,
    matchList: [
      {
        type: 'string',
        value: 'MZ',
        offset: '0',
        mask: null,
        matchList: [
          {
            type: 'string',
            value: 'NE',
            offset: '64:256',
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
