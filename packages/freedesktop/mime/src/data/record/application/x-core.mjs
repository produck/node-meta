/** The media type this record describes. */
export const mediaType = 'application/x-core';

export const commentList = ['Program crash data'];
export const acronym = null;
export const expandedAcronym = null;
export const genericIconName = null;
export const aliasList = [];
export const subClassOfList = [];
export const magicList = [
  {
    priority: null,
    matchList: [
      {
        type: 'string',
        value: '\\177ELF            \\004',
        offset: '0',
        mask: '0xffffffff000000000000000000000000ff',
        matchList: [],
      },
      {
        type: 'string',
        value: '\\177ELF',
        offset: '0',
        mask: null,
        matchList: [
          {
            type: 'byte',
            value: '1',
            offset: '5',
            mask: null,
            matchList: [
              {
                type: 'little16',
                value: '4',
                offset: '16',
                mask: null,
                matchList: [],
              },
            ],
          },
        ],
      },
      {
        type: 'string',
        value: '\\177ELF',
        offset: '0',
        mask: null,
        matchList: [
          {
            type: 'byte',
            value: '2',
            offset: '5',
            mask: null,
            matchList: [
              {
                type: 'big16',
                value: '4',
                offset: '16',
                mask: null,
                matchList: [],
              },
            ],
          },
        ],
      },
      {
        type: 'string',
        value: 'Core\\001',
        offset: '0',
        mask: null,
        matchList: [],
      },
      {
        type: 'string',
        value: 'Core\\002',
        offset: '0',
        mask: null,
        matchList: [],
      },
    ],
  },
];
export const treeMagicList = [];
export const rootXmlList = [];

/** About glob */
const glob0 = 'core';

export const globList = [
  {
    pattern: glob0,
    weight: null,
    caseSensitive: true,
  },
];

export const globPatternList = [glob0];
