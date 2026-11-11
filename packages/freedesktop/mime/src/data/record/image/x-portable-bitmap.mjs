/** The media type this record describes. */
export const mediaType = 'image/x-portable-bitmap';

export const commentList = ['PBM image'];
export const acronym = 'PBM';
export const expandedAcronym = 'Portable BitMap';
export const genericIconName = null;
export const aliasList = [];
export const subClassOfList = ['image/x-portable-anymap'];
export const globList = [
  {
    pattern: '*.pbm',
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
        value: 'P1',
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
        value: 'P4',
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
