/** The media type this record describes. */
export const mediaType = 'application/x-commodore-tape';

export const commentList = ['Commodore tape image'];
export const acronym = null;
export const expandedAcronym = null;
export const genericIconName = 'application-x-executable';
export const aliasList = [];
export const subClassOfList = [];
export const globList = [
  {
    pattern: '*.tap',
    weight: null,
    caseSensitive: false,
  },
  {
    pattern: '*.t64',
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
        value: 'C64-TAPE-RAW',
        offset: '0',
        mask: null,
        matchList: [],
      },
      {
        type: 'string',
        value: 'C64',
        offset: '0',
        mask: null,
        matchList: [
          {
            type: 'little16',
            value: '0x0100',
            offset: '32',
            mask: null,
            matchList: [],
          },
          {
            type: 'little16',
            value: '0x0101',
            offset: '32',
            mask: null,
            matchList: [],
          },
          {
            type: 'little16',
            value: '0x0200',
            offset: '32',
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
