/** The media type this record describes. */
export const mediaType = 'application/buildstream+yaml';

export const commentList = ['BuildStream element'];
export const acronym = null;
export const expandedAcronym = null;
export const genericIconName = null;
export const aliasList = [];
export const subClassOfList = ['application/yaml'];
export const magicList = [
  {
    priority: null,
    matchList: [
      {
        type: 'string',
        value: 'kind:',
        offset: '0:256',
        mask: null,
        matchList: [],
      },
    ],
  },
];
export const treeMagicList = [];
export const rootXmlList = [];

/** About glob */
const glob0 = '*.bst';

export const globList = [
  {
    pattern: glob0,
    weight: null,
    caseSensitive: false,
  },
];

export const globPatternList = [glob0];
