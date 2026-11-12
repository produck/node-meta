/** The media type this record describes. */
export const mediaType = 'application/x-lz4';

export const commentList = ['LZ4 archive'];
export const acronym = null;
export const expandedAcronym = null;
export const genericIconName = 'package-x-generic';
export const aliasList = [];
export const subClassOfList = [];
export const magicList = [
  {
    priority: 60,
    matchList: [
      {
        type: 'little32',
        value: '0x184d2204',
        offset: '0',
        mask: null,
        matchList: [],
      },
      {
        type: 'little32',
        value: '0x184c2102',
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
const glob0 = '*.lz4';

export const globList = [
  {
    pattern: glob0,
    weight: null,
    caseSensitive: false,
  },
];

export const globPatternList = [glob0];
