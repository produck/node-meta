/** The media type this record describes. */
export const mediaType = 'application/x-nintendo-switch-xci';

export const commentList = ['Nintendo Switch encrypted ROM'];
export const acronym = null;
export const expandedAcronym = null;
export const genericIconName = null;
export const aliasList = ['application/x-nx-xci'];
export const subClassOfList = [];
export const globList = [
  {
    pattern: '*.xci',
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
        value: 'HEAD',
        offset: '256',
        mask: null,
        matchList: [
          {
            type: 'byte',
            value: '0xFA',
            offset: '269',
            mask: null,
            matchList: [],
          },
          {
            type: 'byte',
            value: '0xF8',
            offset: '269',
            mask: null,
            matchList: [],
          },
          {
            type: 'byte',
            value: '0xF0',
            offset: '269',
            mask: null,
            matchList: [],
          },
          {
            type: 'byte',
            value: '0xE0',
            offset: '269',
            mask: null,
            matchList: [],
          },
          {
            type: 'byte',
            value: '0xE1',
            offset: '269',
            mask: null,
            matchList: [],
          },
          {
            type: 'byte',
            value: '0xE2',
            offset: '269',
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
