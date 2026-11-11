/** The media type this record describes. */
export const mediaType = 'text/troff';

export const commentList = ['Troff document'];
export const acronym = null;
export const expandedAcronym = null;
export const genericIconName = null;
export const aliasList = ['application/x-troff', 'text/x-troff'];
export const subClassOfList = ['text/plain'];
export const globList = [
  {
    pattern: '*.tr',
    weight: null,
    caseSensitive: false,
  },
  {
    pattern: '*.roff',
    weight: null,
    caseSensitive: false,
  },
  {
    pattern: '*.t',
    weight: 10,
    caseSensitive: false,
  },
];
export const magicList = [
  {
    priority: null,
    matchList: [
      {
        type: 'string',
        value: '.\\\\\\"',
        offset: '0',
        mask: null,
        matchList: [],
      },
      {
        type: 'string',
        value: '\'\\\\\\"',
        offset: '0',
        mask: null,
        matchList: [],
      },
      {
        type: 'string',
        value: '\'.\\\\\\"',
        offset: '0',
        mask: null,
        matchList: [],
      },
      {
        type: 'string',
        value: '\\\\\\"',
        offset: '0',
        mask: null,
        matchList: [],
      },
    ],
  },
];
export const treeMagicList = [];
export const rootXmlList = [];
