/** The media type this record describes. */
export const mediaType = 'image/x-portable-pixmap';

export const commentList = ['PPM image'];
export const acronym = 'PPM';
export const expandedAcronym = 'Portable PixMap';
export const genericIconName = null;
export const aliasList = [];
export const subClassOfList = ['image/x-portable-anymap'];
export const globList = [
  {
    pattern: '*.ppm',
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
        value: 'P3',
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
        value: 'P6',
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
