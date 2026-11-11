/** The media type this record describes. */
export const mediaType = 'text/rust';

export const commentList = ['Rust source code'];
export const acronym = null;
export const expandedAcronym = null;
export const genericIconName = null;
export const aliasList = [];
export const subClassOfList = ['text/plain'];
export const globList = [
  {
    pattern: '*.rs',
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
        value: '//',
        offset: '0',
        mask: null,
        matchList: [],
      },
      {
        type: 'string',
        value: '/*',
        offset: '0',
        mask: null,
        matchList: [],
      },
      {
        type: 'string',
        value: 'fn',
        offset: '0',
        mask: null,
        matchList: [],
      },
      {
        type: 'string',
        value: 'impl',
        offset: '0',
        mask: null,
        matchList: [],
      },
      {
        type: 'string',
        value: 'struct',
        offset: '0',
        mask: null,
        matchList: [],
      },
      {
        type: 'string',
        value: 'trait',
        offset: '0',
        mask: null,
        matchList: [],
      },
      {
        type: 'string',
        value: 'use',
        offset: '0',
        mask: null,
        matchList: [],
      },
    ],
  },
];
export const treeMagicList = [];
export const rootXmlList = [];
