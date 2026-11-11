/** The media type this record describes. */
export const mediaType = 'application/x-spss-sav';

export const commentList = ['SPSS data file'];
export const acronym = 'SPSS';
export const expandedAcronym = 'Statistical Package for the Social Sciences';
export const genericIconName = null;
export const aliasList = ['application/x-spss-savefile'];
export const subClassOfList = [];
export const globList = [
  {
    pattern: '*.sav',
    weight: null,
    caseSensitive: false,
  },
  {
    pattern: '*.zsav',
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
        value: '$FL2',
        offset: '0',
        mask: null,
        matchList: [],
      },
      {
        type: 'string',
        value: '$FL3',
        offset: '0',
        mask: null,
        matchList: [],
      },
    ],
  },
];
export const treeMagicList = [];
export const rootXmlList = [];
