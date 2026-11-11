/** The media type this record describes. */
export const mediaType = 'application/x-lzma';

export const commentList = ['LZMA archive'];
export const acronym = 'LZMA';
export const expandedAcronym = 'Lempel-Ziv-Markov chain-Algorithm';
export const genericIconName = 'package-x-generic';
export const aliasList = [];
export const subClassOfList = [];
export const globList = [
  {
    pattern: '*.lzma',
    weight: null,
    caseSensitive: false,
  },
];
export const magicList = [
  {
    priority: 20,
    matchList: [
      {
        type: 'string',
        value: '\\x5d',
        offset: '0',
        mask: null,
        matchList: [
          {
            type: 'string',
            value: '\\xff\\xff\\xff\\xff\\xff\\xff\\xff\\xff',
            offset: '5',
            mask: null,
            matchList: [
              {
                type: 'little32',
                value: '0x00040000',
                offset: '1',
                mask: null,
                matchList: [],
              },
              {
                type: 'little32',
                value: '0x00100000',
                offset: '1',
                mask: null,
                matchList: [],
              },
              {
                type: 'little32',
                value: '0x00200000',
                offset: '1',
                mask: null,
                matchList: [],
              },
              {
                type: 'little32',
                value: '0x00400000',
                offset: '1',
                mask: null,
                matchList: [],
              },
              {
                type: 'little32',
                value: '0x00800000',
                offset: '1',
                mask: null,
                matchList: [],
              },
              {
                type: 'little32',
                value: '0x01000000',
                offset: '1',
                mask: null,
                matchList: [],
              },
              {
                type: 'little32',
                value: '0x02000000',
                offset: '1',
                mask: null,
                matchList: [],
              },
              {
                type: 'little32',
                value: '0x04000000',
                offset: '1',
                mask: null,
                matchList: [],
              },
            ],
          },
          {
            type: 'byte',
            value: '0',
            offset: '12',
            mask: null,
            matchList: [
              {
                type: 'little32',
                value: '0x00040000',
                offset: '1',
                mask: null,
                matchList: [],
              },
              {
                type: 'little32',
                value: '0x00100000',
                offset: '1',
                mask: null,
                matchList: [],
              },
              {
                type: 'little32',
                value: '0x00200000',
                offset: '1',
                mask: null,
                matchList: [],
              },
              {
                type: 'little32',
                value: '0x00400000',
                offset: '1',
                mask: null,
                matchList: [],
              },
              {
                type: 'little32',
                value: '0x00800000',
                offset: '1',
                mask: null,
                matchList: [],
              },
              {
                type: 'little32',
                value: '0x01000000',
                offset: '1',
                mask: null,
                matchList: [],
              },
              {
                type: 'little32',
                value: '0x02000000',
                offset: '1',
                mask: null,
                matchList: [],
              },
              {
                type: 'little32',
                value: '0x04000000',
                offset: '1',
                mask: null,
                matchList: [],
              },
            ],
          },
        ],
      },
    ],
  },
];
export const treeMagicList = [];
export const rootXmlList = [];
