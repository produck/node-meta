/** The media type this record describes. */
export const mediaType = 'application/x-qtiplot';

export const commentList = ['QtiPlot document'];
export const acronym = null;
export const expandedAcronym = null;
export const genericIconName = 'x-office-document';
export const aliasList = [];
export const subClassOfList = ['text/plain'];
export const globList = [
  {
    pattern: '*.qti',
    weight: null,
    caseSensitive: false,
  },
  {
    pattern: '*.qti.gz',
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
        value: 'QtiPlot',
        offset: '0',
        mask: null,
        matchList: [],
      },
    ],
  },
];
export const treeMagicList = [];
export const rootXmlList = [];
