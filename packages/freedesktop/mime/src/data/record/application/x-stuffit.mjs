/** The media type this record describes. */
export const mediaType = 'application/x-stuffit';

export const commentList = ['StuffIt archive'];
export const acronym = null;
export const expandedAcronym = null;
export const genericIconName = 'package-x-generic';
export const aliasList = ['application/stuffit', 'application/x-sit'];
export const subClassOfList = [];
export const magicList = [
  {
    priority: 60,
    matchList: [
      {
        type: 'string',
        value: 'StuffIt ',
        offset: '0',
        mask: null,
        matchList: [],
      },
      {
        type: 'string',
        value: 'SIT!',
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
const glob0 = '*.sit';

export const globList = [
  {
    pattern: glob0,
    weight: null,
    caseSensitive: false,
  },
];

export const globPatternList = [glob0];
