/** The media type this record describes. */
export const mediaType = 'application/vnd.symbian.install';

export const commentList = ['SIS package'];
export const acronym = 'SIS';
export const expandedAcronym = 'Symbian Installation File';
export const genericIconName = 'package-x-generic';
export const aliasList = [];
export const subClassOfList = [];
export const magicList = [
  {
    priority: null,
    matchList: [
      {
        type: 'little32',
        value: '0x10000419',
        offset: '8',
        mask: null,
        matchList: [],
      },
    ],
  },
];
export const treeMagicList = [];
export const rootXmlList = [];

/** About glob */
const glob0 = '*.sis';

export const globList = [
  {
    pattern: glob0,
    weight: null,
    caseSensitive: false,
  },
];

export const globPatternList = [glob0];
