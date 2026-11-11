/** The media type this record describes. */
export const mediaType = 'application/x-object';

export const commentList = ['Object code'];
export const acronym = null;
export const expandedAcronym = null;
export const genericIconName = null;
export const aliasList = [];
export const subClassOfList = [];
export const globList = [
  {
    pattern: '*.o',
    weight: null,
    caseSensitive: false,
  },
  {
    pattern: '*.mod',
    weight: 40,
    caseSensitive: false,
  },
];
export const magicList = [
  {
    priority: null,
    matchList: [
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
                value: '1',
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
                value: '1',
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
