/** The media type this record describes. */
export const mediaType = 'image/x-portable-graymap';

export const commentList = ['PGM image'];
export const acronym = 'PGM';
export const expandedAcronym = 'Portable GrayMap';
export const genericIconName = null;
export const aliasList = [];
export const subClassOfList = ['image/x-portable-anymap'];
export const globList = [
  {
    pattern: '*.pgm',
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
        value: 'P2',
        offset: '0',
        mask: null,
        matchList: [
          {
            type: 'byte',
            value: '0x0a',
            offset: '2',
            mask: null,
            matchList: [],
          },
          {
            type: 'byte',
            value: '0x20',
            offset: '2',
            mask: null,
            matchList: [],
          },
          {
            type: 'byte',
            value: '0x09',
            offset: '2',
            mask: null,
            matchList: [],
          },
          {
            type: 'byte',
            value: '0x0d',
            offset: '2',
            mask: null,
            matchList: [],
          },
        ],
      },
      {
        type: 'string',
        value: 'P5',
        offset: '0',
        mask: null,
        matchList: [
          {
            type: 'byte',
            value: '0x0a',
            offset: '2',
            mask: null,
            matchList: [],
          },
          {
            type: 'byte',
            value: '0x20',
            offset: '2',
            mask: null,
            matchList: [],
          },
          {
            type: 'byte',
            value: '0x09',
            offset: '2',
            mask: null,
            matchList: [],
          },
          {
            type: 'byte',
            value: '0x0d',
            offset: '2',
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
