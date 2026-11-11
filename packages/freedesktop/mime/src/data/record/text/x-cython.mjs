/** The media type this record describes. */
export const mediaType = 'text/x-cython';

export const commentList = ['Cython source code'];
export const acronym = null;
export const expandedAcronym = null;
export const genericIconName = null;
export const aliasList = [];
export const subClassOfList = ['text/plain'];
export const globList = [
  {
    pattern: '*.pxd',
    weight: null,
    caseSensitive: false,
  },
  {
    pattern: '*.pxi',
    weight: null,
    caseSensitive: false,
  },
  {
    pattern: '*.pyx',
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
        value: 'cdef',
        offset: '0',
        mask: null,
        matchList: [],
      },
      {
        type: 'string',
        value: 'class',
        offset: '0',
        mask: null,
        matchList: [],
      },
      {
        type: 'string',
        value: 'def',
        offset: '0',
        mask: null,
        matchList: [],
      },
      {
        type: 'string',
        value: 'import',
        offset: '0',
        mask: null,
        matchList: [],
      },
    ],
  },
];
export const treeMagicList = [];
export const rootXmlList = [];
