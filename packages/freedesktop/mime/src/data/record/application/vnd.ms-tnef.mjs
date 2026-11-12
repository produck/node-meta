/** The media type this record describes. */
export const mediaType = 'application/vnd.ms-tnef';

export const commentList = ['TNEF message'];
export const acronym = 'TNEF';
export const expandedAcronym = 'Transport Neutral Encapsulation Format';
export const genericIconName = null;
export const aliasList = ['application/ms-tnef'];
export const subClassOfList = [];
export const magicList = [
  {
    priority: null,
    matchList: [
      {
        type: 'little32',
        value: '0x223e9f78',
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
const glob0 = '*.tnef';
const glob1 = '*.tnf';
const glob2 = 'winmail.dat';

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
