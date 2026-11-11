/** The media type this record describes. */
export const mediaType = 'application/x-spss-por';

export const commentList = ['SPSS portable data file'];
export const acronym = 'SPSS';
export const expandedAcronym = 'Statistical Package for the Social Sciences';
export const genericIconName = null;
export const aliasList = [];
export const subClassOfList = [];
export const globList = [
  {
    pattern: '*.por',
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
