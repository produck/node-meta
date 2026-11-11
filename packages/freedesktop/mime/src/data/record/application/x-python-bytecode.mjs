/** The media type this record describes. */
export const mediaType = 'application/x-python-bytecode';

export const commentList = ['Python bytecode'];
export const acronym = null;
export const expandedAcronym = null;
export const genericIconName = null;
export const aliasList = [];
export const subClassOfList = [];
export const globList = [
  {
    pattern: '*.pyc',
    weight: null,
    caseSensitive: false,
  },
  {
    pattern: '*.pyo',
    weight: null,
    caseSensitive: false,
  },
];
export const magicList = [
  {
    priority: null,
    matchList: [
      {
        type: 'big32',
        value: '0x994e0d0a',
        offset: '0',
        mask: null,
        matchList: [],
      },
    ],
  },
];
export const treeMagicList = [];
export const rootXmlList = [];
