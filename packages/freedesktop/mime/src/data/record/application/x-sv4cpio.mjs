/** The media type this record describes. */
export const mediaType = 'application/x-sv4cpio';

export const commentList = ['SV4 CPIO archive'];
export const acronym = null;
export const expandedAcronym = null;
export const genericIconName = 'package-x-generic';
export const aliasList = [];
export const subClassOfList = ['application/x-cpio'];
export const magicList = [
  {
    priority: 60,
    matchList: [
      {
        type: 'string',
        value: '070701',
        offset: '0',
        mask: null,
        matchList: [
          {
            type: 'string',
            value: '00000000',
            offset: '14',
            mask: '0xffffffff80808080',
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
const glob0 = '*.sv4cpio';
const glob1 = '*.cpio';

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
];

export const globPatternList = [glob0, glob1];
