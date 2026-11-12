/** The media type this record describes. */
export const mediaType = 'application/x-font-pcf';

export const commentList = ['PCF font'];
export const acronym = 'PCF';
export const expandedAcronym = 'Portable Compiled Format';
export const genericIconName = 'font-x-generic';
export const aliasList = [];
export const subClassOfList = [];
export const magicList = [
  {
    priority: null,
    matchList: [
      {
        type: 'string',
        value: '\\001fcp',
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
const glob0 = '*.pcf';
const glob1 = '*.pcf.Z';
const glob2 = '*.pcf.gz';

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
    weight: null,
    caseSensitive: false,
  },
];

export const globPatternList = [glob0, glob1, glob2];
