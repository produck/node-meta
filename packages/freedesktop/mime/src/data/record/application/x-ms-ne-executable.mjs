/** The media type this record describes. */
export const mediaType = 'application/x-ms-ne-executable';

export const commentList = ['16-bit Windows program'];
export const acronym = null;
export const expandedAcronym = null;
export const genericIconName = 'application-x-executable';
export const aliasList = [];
export const subClassOfList = ['application/x-msdownload'];
export const magicList = [
  {
    priority: 80,
    matchList: [
      {
        type: 'string',
        value: 'MZ',
        offset: '0',
        mask: null,
        matchList: [
          {
            type: 'string',
            value: 'NE',
            offset: '64:256',
            mask: null,
            matchList: [],
          },
        ],
      },
    ],
  },
];
export const treeMagicList = [];
export const rootXmlList = [];

/** About glob */
const glob0 = '*.exe';
const glob1 = '*.dll';
const glob2 = '*.cpl';
const glob3 = '*.drv';
const glob4 = '*.scr';

export const globList = [
  {
    pattern: glob0,
    weight: 20,
    caseSensitive: false,
  },
  {
    pattern: glob1,
    weight: 20,
    caseSensitive: false,
  },
  {
    pattern: glob2,
    weight: 20,
    caseSensitive: false,
  },
  {
    pattern: glob3,
    weight: 20,
    caseSensitive: false,
  },
  {
    pattern: glob4,
    weight: 20,
    caseSensitive: false,
  },
];

export const globPatternList = [glob0, glob1, glob2, glob3, glob4];
