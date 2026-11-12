/** The media type this record describes. */
export const mediaType = 'text/troff';

export const commentList = ['Troff document'];
export const acronym = null;
export const expandedAcronym = null;
export const genericIconName = null;
export const aliasList = ['application/x-troff', 'text/x-troff'];
export const subClassOfList = ['text/plain'];
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

/** About glob */
const glob0 = '*.tr';
const glob1 = '*.roff';
const glob2 = '*.t';

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
  {
    pattern: glob2,
    weight: 10,
    caseSensitive: false,
  },
];

export const globPatternList = [glob0, glob1, glob2];
