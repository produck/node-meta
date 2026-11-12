/** The media type this record describes. */
export const mediaType = 'application/x-tar';

export const commentList = ['Tar archive'];
export const acronym = null;
export const expandedAcronym = null;
export const genericIconName = 'package-x-generic';
export const aliasList = ['application/x-gtar'];
export const subClassOfList = [];
export const magicList = [
  {
    priority: 60,
    matchList: [
      {
        type: 'string',
        value: 'ustar\\0',
        offset: '257',
        mask: null,
        matchList: [],
      },
      {
        type: 'string',
        value: 'ustar\\040\\040\\0',
        offset: '257',
        mask: null,
        matchList: [],
      },
    ],
  },
];
export const treeMagicList = [];
export const rootXmlList = [];

/** About glob */
const glob0 = '*.tar';
const glob1 = '*.gtar';
const glob2 = '*.gem';

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
