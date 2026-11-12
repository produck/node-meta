/** The media type this record describes. */
export const mediaType = 'application/font-tdpfr';

export const commentList = ['TDPFR font'];
export const acronym = 'TDPFR';
export const expandedAcronym = 'TrueDoc Portable Font Resource';
export const genericIconName = 'font-x-generic';
export const aliasList = ['application/vnd.truedoc'];
export const subClassOfList = [];
export const magicList = [
  {
    priority: null,
    matchList: [
      {
        type: 'big32',
        value: '0x50465230',
        offset: '0',
        mask: null,
        matchList: [],
      },
      {
        type: 'big32',
        value: '0x50465231',
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
const glob0 = '*.pfr';

export const globList = [
  {
    pattern: glob0,
    weight: null,
    caseSensitive: false,
  },
];

export const globPatternList = [glob0];
