/** The media type this record describes. */
export const mediaType = 'text/x-ocaml';

export const commentList = ['OCaml source code'];
export const acronym = null;
export const expandedAcronym = null;
export const genericIconName = null;
export const aliasList = [];
export const subClassOfList = ['text/plain'];
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

/** About glob */
const glob0 = '*.ml';
const glob1 = '*.mli';

export const globList = [
  {
    pattern: glob0,
    weight: null,
    caseSensitive: false,
  },
  {
    pattern: glob1,
    weight: null,
    caseSensitive: false,
  },
];

export const globPatternList = [glob0, glob1];
