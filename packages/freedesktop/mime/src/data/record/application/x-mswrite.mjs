/** The media type this record describes. */
export const mediaType = 'application/x-mswrite';

export const commentList = ['Microsoft Write document'];
export const acronym = null;
export const expandedAcronym = null;
export const genericIconName = 'x-office-document';
export const aliasList = [];
export const subClassOfList = [];
export const globList = [
  {
    pattern: '*.wri',
    weight: null,
    caseSensitive: false,
  },
];
export const magicList = [
  {
    priority: 40,
    matchList: [
      {
        type: 'string',
        value: '\\x00\\x00\\x00\\xab\\x00\\x00\\x00\\x00\\x00\\x00\\x00\\x00',
        offset: '2',
        mask: null,
        matchList: [
          {
            type: 'little16',
            value: '0137061',
            offset: '0',
            mask: null,
            matchList: [],
          },
          {
            type: 'little16',
            value: '0137062',
            offset: '0',
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
