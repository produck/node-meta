/** The media type this record describes. */
export const mediaType = 'application/wasm';

export const commentList = ['WASM binary module'];
export const acronym = 'WASM';
export const expandedAcronym = 'Web Assembly';
export const genericIconName = null;
export const aliasList = [];
export const subClassOfList = [];
export const globList = [
  {
    pattern: '*.wasm',
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
        value: '\\000asm',
        offset: '0',
        mask: null,
        matchList: [],
      },
    ],
  },
];
export const treeMagicList = [];
export const rootXmlList = [];
