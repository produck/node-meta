/** The media type this record describes. */
export const mediaType = 'application/x-aportisdoc';

export const commentList = ['AportisDoc document'];
export const acronym = null;
export const expandedAcronym = null;
export const genericIconName = 'x-office-document';
export const aliasList = [];
export const subClassOfList = ['application/vnd.palm'];
export const globList = [
  {
    pattern: '*.pdb',
    weight: 30,
    caseSensitive: false,
  },
  {
    pattern: '*.pdc',
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
