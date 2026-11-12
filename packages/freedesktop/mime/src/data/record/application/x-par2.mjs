/** The media type this record describes. */
export const mediaType = 'application/x-par2';

export const commentList = ['Parchive archive'];
export const acronym = 'Parchive';
export const expandedAcronym = 'Parity Volume Set Archive';
export const genericIconName = 'package-x-generic';
export const aliasList = [];
export const subClassOfList = [];
export const magicList = [
  {
    priority: 60,
    matchList: [
      {
        type: 'string',
        value: 'PAR2',
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
const glob0 = '*.PAR2';
const glob1 = '*.par2';

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
];

export const globPatternList = [glob0, glob1];
