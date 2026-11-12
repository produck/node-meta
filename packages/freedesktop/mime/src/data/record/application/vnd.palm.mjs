/** The media type this record describes. */
export const mediaType = 'application/vnd.palm';

export const commentList = ['Palm OS database'];
export const acronym = null;
export const expandedAcronym = null;
export const genericIconName = null;
export const aliasList = ['application/x-palm-database'];
export const subClassOfList = [];
export const magicList = [];
export const treeMagicList = [];
export const rootXmlList = [];

/** About glob */
const glob0 = '*.prc';
const glob1 = '*.pdb';
const glob2 = '*.pqa';
const glob3 = '*.oprc';

export const globList = [
  {
    pattern: glob0,
    weight: null,
    caseSensitive: false,
  },
  {
    pattern: glob1,
    weight: 40,
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
