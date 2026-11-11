/** The media type this record describes. */
export const mediaType = 'image/bmp';

export const commentList = ['Windows BMP image'];
export const acronym = null;
export const expandedAcronym = null;
export const genericIconName = null;
export const aliasList = ['image/x-bmp', 'image/x-MS-bmp'];
export const subClassOfList = [];
export const globList = [
  {
    pattern: '*.bmp',
    weight: null,
    caseSensitive: false,
  },
  {
    pattern: '*.dib',
    weight: null,
    caseSensitive: false,
  },
];
export const magicList = [
  {
    priority: null,
    matchList: [
      {
        type: 'string',
        value: 'BMxxxx\\000\\000',
        offset: '0',
        mask: '0xffff00000000ffff',
        matchList: [],
      },
      {
        type: 'string',
        value: 'BM',
        offset: '0',
        mask: null,
        matchList: [
          {
            type: 'byte',
            value: '12',
            offset: '14',
            mask: null,
            matchList: [],
          },
          {
            type: 'byte',
            value: '64',
            offset: '14',
            mask: null,
            matchList: [],
          },
          {
            type: 'byte',
            value: '40',
            offset: '14',
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
