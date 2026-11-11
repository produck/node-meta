/** The media type this record describes. */
export const mediaType = 'chemical/x-pdb';

export const commentList = ['Protein Data Bank file'];
export const acronym = null;
export const expandedAcronym = null;
export const genericIconName = 'text-x-generic';
export const aliasList = [];
export const subClassOfList = ['text/plain'];
export const globList = [
  {
    pattern: '*.pdb',
    weight: null,
    caseSensitive: false,
  },
  {
    pattern: '*.brk',
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
        value: 'HEADER ',
        offset: '0',
        mask: null,
        matchList: [],
      },
    ],
  },
];
export const treeMagicList = [];
export const rootXmlList = [];
