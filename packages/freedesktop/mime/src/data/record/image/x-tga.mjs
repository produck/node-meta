/** The media type this record describes. */
export const mediaType = 'image/x-tga';

export const commentList = ['TGA image'];
export const acronym = 'TGA';
export const expandedAcronym = 'Truevision Graphics Adapter';
export const genericIconName = null;
export const aliasList = [
  'application/tga',
  'application/x-targa',
  'application/x-tga',
  'image/targa',
  'image/tga',
  'image/x-icb',
  'image/x-targa',
];
export const subClassOfList = [];
export const globList = [
  {
    pattern: '*.tga',
    weight: null,
    caseSensitive: false,
  },
  {
    pattern: '*.icb',
    weight: null,
    caseSensitive: false,
  },
  {
    pattern: '*.tpic',
    weight: null,
    caseSensitive: false,
  },
  {
    pattern: '*.vda',
    weight: null,
    caseSensitive: false,
  },
  {
    pattern: '*.vst',
    weight: null,
    caseSensitive: false,
  },
];
export const magicList = [
  {
    priority: 10,
    matchList: [
      {
        type: 'string',
        value: '\\0\\0\\0\\0\\0\\0\\0\\0\\0\\0\\0\\0\\0\\0\\0\\0\\0\\0',
        offset: '0',
        mask: '0x00fed400000000000000000000000000c006',
        matchList: [
          {
            type: 'string',
            value: '\\x00\\x02',
            offset: '1',
            mask: null,
            matchList: [
              {
                type: 'byte',
                value: '8',
                offset: '16',
                mask: null,
                matchList: [],
              },
              {
                type: 'byte',
                value: '15',
                offset: '16',
                mask: null,
                matchList: [],
              },
              {
                type: 'byte',
                value: '16',
                offset: '16',
                mask: null,
                matchList: [],
              },
              {
                type: 'byte',
                value: '24',
                offset: '16',
                mask: null,
                matchList: [],
              },
              {
                type: 'byte',
                value: '32',
                offset: '16',
                mask: null,
                matchList: [],
              },
            ],
          },
          {
            type: 'string',
            value: '\\x00\\x03',
            offset: '1',
            mask: null,
            matchList: [
              {
                type: 'byte',
                value: '8',
                offset: '16',
                mask: null,
                matchList: [],
              },
              {
                type: 'byte',
                value: '15',
                offset: '16',
                mask: null,
                matchList: [],
              },
              {
                type: 'byte',
                value: '16',
                offset: '16',
                mask: null,
                matchList: [],
              },
              {
                type: 'byte',
                value: '24',
                offset: '16',
                mask: null,
                matchList: [],
              },
              {
                type: 'byte',
                value: '32',
                offset: '16',
                mask: null,
                matchList: [],
              },
            ],
          },
          {
            type: 'string',
            value: '\\x00\\x0a',
            offset: '1',
            mask: null,
            matchList: [
              {
                type: 'byte',
                value: '8',
                offset: '16',
                mask: null,
                matchList: [],
              },
              {
                type: 'byte',
                value: '15',
                offset: '16',
                mask: null,
                matchList: [],
              },
              {
                type: 'byte',
                value: '16',
                offset: '16',
                mask: null,
                matchList: [],
              },
              {
                type: 'byte',
                value: '24',
                offset: '16',
                mask: null,
                matchList: [],
              },
              {
                type: 'byte',
                value: '32',
                offset: '16',
                mask: null,
                matchList: [],
              },
            ],
          },
          {
            type: 'string',
            value: '\\x00\\x0b',
            offset: '1',
            mask: null,
            matchList: [
              {
                type: 'byte',
                value: '8',
                offset: '16',
                mask: null,
                matchList: [],
              },
              {
                type: 'byte',
                value: '15',
                offset: '16',
                mask: null,
                matchList: [],
              },
              {
                type: 'byte',
                value: '16',
                offset: '16',
                mask: null,
                matchList: [],
              },
              {
                type: 'byte',
                value: '24',
                offset: '16',
                mask: null,
                matchList: [],
              },
              {
                type: 'byte',
                value: '32',
                offset: '16',
                mask: null,
                matchList: [],
              },
            ],
          },
          {
            type: 'string',
            value: '\\x01\\x01',
            offset: '1',
            mask: null,
            matchList: [
              {
                type: 'byte',
                value: '8',
                offset: '16',
                mask: null,
                matchList: [],
              },
              {
                type: 'byte',
                value: '15',
                offset: '16',
                mask: null,
                matchList: [],
              },
              {
                type: 'byte',
                value: '16',
                offset: '16',
                mask: null,
                matchList: [],
              },
              {
                type: 'byte',
                value: '24',
                offset: '16',
                mask: null,
                matchList: [],
              },
              {
                type: 'byte',
                value: '32',
                offset: '16',
                mask: null,
                matchList: [],
              },
            ],
          },
          {
            type: 'string',
            value: '\\x01\\x09',
            offset: '1',
            mask: null,
            matchList: [
              {
                type: 'byte',
                value: '8',
                offset: '16',
                mask: null,
                matchList: [],
              },
              {
                type: 'byte',
                value: '15',
                offset: '16',
                mask: null,
                matchList: [],
              },
              {
                type: 'byte',
                value: '16',
                offset: '16',
                mask: null,
                matchList: [],
              },
              {
                type: 'byte',
                value: '24',
                offset: '16',
                mask: null,
                matchList: [],
              },
              {
                type: 'byte',
                value: '32',
                offset: '16',
                mask: null,
                matchList: [],
              },
            ],
          },
          {
            type: 'string',
            value: '\\x01\\x20',
            offset: '1',
            mask: null,
            matchList: [
              {
                type: 'byte',
                value: '8',
                offset: '16',
                mask: null,
                matchList: [],
              },
              {
                type: 'byte',
                value: '15',
                offset: '16',
                mask: null,
                matchList: [],
              },
              {
                type: 'byte',
                value: '16',
                offset: '16',
                mask: null,
                matchList: [],
              },
              {
                type: 'byte',
                value: '24',
                offset: '16',
                mask: null,
                matchList: [],
              },
              {
                type: 'byte',
                value: '32',
                offset: '16',
                mask: null,
                matchList: [],
              },
            ],
          },
          {
            type: 'string',
            value: '\\x01\\x21',
            offset: '1',
            mask: null,
            matchList: [
              {
                type: 'byte',
                value: '8',
                offset: '16',
                mask: null,
                matchList: [],
              },
              {
                type: 'byte',
                value: '15',
                offset: '16',
                mask: null,
                matchList: [],
              },
              {
                type: 'byte',
                value: '16',
                offset: '16',
                mask: null,
                matchList: [],
              },
              {
                type: 'byte',
                value: '24',
                offset: '16',
                mask: null,
                matchList: [],
              },
              {
                type: 'byte',
                value: '32',
                offset: '16',
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
