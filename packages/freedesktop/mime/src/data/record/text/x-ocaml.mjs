/** The media type this record describes. */
export const mediaType = 'text/x-ocaml';

export const commentList = ['OCaml source code'];
export const acronym = null;
export const expandedAcronym = null;
export const genericIconName = null;
export const aliasList = [];
export const subClassOfList = ['text/plain'];
export const globList = [
  {
    pattern: '*.ml',
    weight: null,
    caseSensitive: false,
  },
  {
    pattern: '*.mli',
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
        value: 'class',
        offset: '0',
        mask: null,
        matchList: [],
      },
      {
        type: 'string',
        value: 'module',
        offset: '0',
        mask: null,
        matchList: [],
      },
    ],
  },
  {
    priority: 5,
    matchList: [
      {
        type: 'string',
        value: 'fun',
        offset: '0',
        mask: null,
        matchList: [],
      },
    ],
  },
];
export const treeMagicList = [];
export const rootXmlList = [];
