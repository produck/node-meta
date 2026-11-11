/** The media type this record describes. */
export const mediaType = 'text/x-nim';

export const commentList = ['Nim source code'];
export const acronym = null;
export const expandedAcronym = null;
export const genericIconName = null;
export const aliasList = [];
export const subClassOfList = ['text/plain'];
export const globList = [
  {
    pattern: '*.nim',
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
        value: 'import',
        offset: '0',
        mask: null,
        matchList: [],
      },
      {
        type: 'string',
        value: 'proc',
        offset: '0',
        mask: null,
        matchList: [],
      },
    ],
  },
];
export const treeMagicList = [];
export const rootXmlList = [];
