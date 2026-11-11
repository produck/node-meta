/** The media type this record describes. */
export const mediaType = 'application/x-sharedlib';

export const commentList = ['Shared library'];
export const acronym = null;
export const expandedAcronym = null;
export const genericIconName = null;
export const aliasList = [];
export const subClassOfList = [];
export const globList = [
  {
    pattern: '*.so',
    weight: null,
    caseSensitive: false,
  },
  {
    pattern: '*.so.[0-9]*',
    weight: 60,
    caseSensitive: false,
  },
];
export const magicList = [
  {
    priority: null,
    matchList: [
      {
        type: 'little16',
        value: '0603',
        offset: '0',
        mask: null,
        matchList: [
          {
            type: 'little16',
            value: '020000',
            offset: '22',
            mask: '030000',
            matchList: [],
          },
        ],
      },
    ],
  },
];
export const treeMagicList = [];
export const rootXmlList = [];
