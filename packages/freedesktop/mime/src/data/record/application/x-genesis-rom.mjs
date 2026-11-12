/** The media type this record describes. */
export const mediaType = 'application/x-genesis-rom';

export const commentList = ['Genesis ROM'];
export const acronym = null;
export const expandedAcronym = null;
export const genericIconName = 'application-x-executable';
export const aliasList = [];
export const subClassOfList = [];
export const magicList = [
  {
    priority: 50,
    matchList: [
      {
        type: 'string',
        value: 'SEGA',
        offset: '256',
        mask: null,
        matchList: [],
      },
      {
        type: 'string',
        value: ' SEGA',
        offset: '256',
        mask: null,
        matchList: [],
      },
    ],
  },
];
export const treeMagicList = [];
export const rootXmlList = [];

/** About glob */
const glob0 = '*.gen';
const glob1 = '*.md';
const glob2 = '*.68k';
const glob3 = '*.sgd';

export const globList = [
  {
    pattern: glob0,
    weight: null,
    caseSensitive: false,
  },
  {
    pattern: glob1,
    weight: 10,
    caseSensitive: false,
  },
  {
    pattern: glob2,
    weight: null,
    caseSensitive: false,
  },
  {
    pattern: glob3,
    weight: null,
    caseSensitive: false,
  },
];

export const globPatternList = [glob0, glob1, glob2, glob3];
