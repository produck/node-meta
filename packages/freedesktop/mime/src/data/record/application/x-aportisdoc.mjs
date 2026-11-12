/** The media type this record describes. */
export const mediaType = 'application/x-aportisdoc';

export const commentList = ['AportisDoc document'];
export const acronym = null;
export const expandedAcronym = null;
export const genericIconName = 'x-office-document';
export const aliasList = [];
export const subClassOfList = ['application/vnd.palm'];
export const magicList = [
  {
    priority: null,
    matchList: [
      {
        type: 'string',
        value: 'TEXtREAd',
        offset: '60',
        mask: null,
        matchList: [],
      },
      {
        type: 'string',
        value: 'TEXtTlDc',
        offset: '60',
        mask: null,
        matchList: [],
      },
    ],
  },
];
export const treeMagicList = [];
export const rootXmlList = [];

/** About glob */
const glob0 = '*.pdb';
const glob1 = '*.pdc';

export const globList = [
  {
    pattern: glob0,
    weight: 30,
    caseSensitive: false,
  },
  {
    pattern: glob1,
    weight: null,
    caseSensitive: false,
  },
];

export const globPatternList = [glob0, glob1];
