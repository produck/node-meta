/** The media type this record describes. */
export const mediaType = 'application/x-cpio';

export const commentList = ['CPIO archive'];
export const acronym = null;
export const expandedAcronym = null;
export const genericIconName = 'package-x-generic';
export const aliasList = [];
export const subClassOfList = [];
export const globList = [
  {
    pattern: '*.cpio',
    weight: null,
    caseSensitive: false,
  },
];
export const magicList = [
  {
    priority: 60,
    matchList: [
      {
        type: 'little16',
        value: '070707',
        offset: '0',
        mask: null,
        matchList: [],
      },
      {
        type: 'big16',
        value: '070707',
        offset: '0',
        mask: null,
        matchList: [],
      },
      {
        type: 'string',
        value: '070707',
        offset: '0',
        mask: null,
        matchList: [
          {
            type: 'string',
            value: '000000000000000000',
            offset: '6',
            mask: '0xf8f8f8f8f8f8f8f8f8f8f8f8fef8f8f8f8f8',
            matchList: [],
          },
        ],
      },
    ],
  },
];
export const treeMagicList = [];
export const rootXmlList = [];
