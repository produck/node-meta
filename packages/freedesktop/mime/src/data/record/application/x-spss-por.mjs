/** The media type this record describes. */
export const mediaType = 'application/x-spss-por';

export const commentList = ['SPSS portable data file'];
export const acronym = 'SPSS';
export const expandedAcronym = 'Statistical Package for the Social Sciences';
export const genericIconName = null;
export const aliasList = [];
export const subClassOfList = [];
export const magicList = [
  {
    priority: null,
    matchList: [
      {
        type: 'string',
        value: 'ASCII SPSS PORT FILE',
        offset: '40',
        mask: null,
        matchList: [],
      },
    ],
  },
];
export const treeMagicList = [];
export const rootXmlList = [];

/** About glob */
const glob0 = '*.por';

export const globList = [
  {
    pattern: glob0,
    weight: null,
    caseSensitive: false,
  },
];

export const globPatternList = [glob0];
