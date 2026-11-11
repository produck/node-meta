/** The media type this record describes. */
export const mediaType = 'text/x-tex';

export const commentList = ['TeX document'];
export const acronym = null;
export const expandedAcronym = null;
export const genericIconName = null;
export const aliasList = ['application/x-tex'];
export const subClassOfList = ['text/plain'];
export const globList = [
  {
    pattern: '*.tex',
    weight: null,
    caseSensitive: false,
  },
  {
    pattern: '*.ltx',
    weight: null,
    caseSensitive: false,
  },
  {
    pattern: '*.sty',
    weight: null,
    caseSensitive: false,
  },
  {
    pattern: '*.cls',
    weight: null,
    caseSensitive: false,
  },
  {
    pattern: '*.dtx',
    weight: null,
    caseSensitive: false,
  },
  {
    pattern: '*.ins',
    weight: null,
    caseSensitive: false,
  },
  {
    pattern: '*.latex',
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
        value: '%',
        offset: '0',
        mask: null,
        matchList: [],
      },
    ],
  },
  {
    priority: null,
    matchList: [
      {
        type: 'string',
        value: 'documentclass',
        offset: '1',
        mask: null,
        matchList: [],
      },
    ],
  },
];
export const treeMagicList = [];
export const rootXmlList = [];
