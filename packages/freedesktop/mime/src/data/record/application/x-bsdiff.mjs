/** The media type this record describes. */
export const mediaType = 'application/x-bsdiff';

export const commentList = ['Binary differences between files'];
export const acronym = null;
export const expandedAcronym = null;
export const genericIconName = null;
export const aliasList = [];
export const subClassOfList = [];
export const magicList = [
  {
    priority: null,
    matchList: [
      {
        type: 'string',
        value: 'BSDIFF40',
        offset: '0',
        mask: null,
        matchList: [],
      },
      {
        type: 'string',
        value: 'BSDIFN40',
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
const glob0 = '*.bsdiff';

export const globList = [
  {
    pattern: glob0,
    weight: null,
    caseSensitive: false,
  },
];

export const globPatternList = [glob0];
