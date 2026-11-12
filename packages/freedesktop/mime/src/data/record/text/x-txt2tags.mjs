/** The media type this record describes. */
export const mediaType = 'text/x-txt2tags';

export const commentList = ['txt2tags document'];
export const acronym = null;
export const expandedAcronym = null;
export const genericIconName = null;
export const aliasList = [];
export const subClassOfList = ['text/plain'];
export const magicList = [
  {
    priority: 60,
    matchList: [
      {
        type: 'string',
        value: '%!postproc',
        offset: '0',
        mask: null,
        matchList: [],
      },
      {
        type: 'string',
        value: '%!encoding',
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
const glob0 = '*.t2t';

export const globList = [
  {
    pattern: glob0,
    weight: null,
    caseSensitive: false,
  },
];

export const globPatternList = [glob0];
