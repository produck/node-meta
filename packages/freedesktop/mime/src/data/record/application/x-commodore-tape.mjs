/** The media type this record describes. */
export const mediaType = 'application/x-commodore-tape';

export const commentList = ['Commodore tape image'];
export const acronym = null;
export const expandedAcronym = null;
export const genericIconName = 'application-x-executable';
export const aliasList = [];
export const subClassOfList = [];
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

/** About glob */
const glob0 = '*.tap';
const glob1 = '*.t64';

export const globList = [
  {
    pattern: glob0,
    weight: null,
    caseSensitive: false,
  },
  {
    pattern: glob1,
    weight: null,
    caseSensitive: false,
  },
];

export const globPatternList = [glob0, glob1];
