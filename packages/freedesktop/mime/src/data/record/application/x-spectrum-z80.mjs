/** The media type this record describes. */
export const mediaType = 'application/x-spectrum-z80';

export const commentList = ['ZX Spectrum Z80 snapshot'];
export const acronym = null;
export const expandedAcronym = null;
export const genericIconName = null;
export const aliasList = [];
export const subClassOfList = [];
export const globList = [
  {
    pattern: '*.z80',
    weight: null,
    caseSensitive: false,
  },
];
export const magicList = [
  {
    priority: null,
    matchList: [
      {
        type: 'little16',
        value: '0',
        offset: '6',
        mask: null,
        matchList: [
          {
            type: 'little16',
            value: '23',
            offset: '30',
            mask: null,
            matchList: [],
          },
          {
            type: 'little16',
            value: '54',
            offset: '30',
            mask: null,
            matchList: [],
          },
          {
            type: 'little16',
            value: '55',
            offset: '30',
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
