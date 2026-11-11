/** The media type this record describes. */
export const mediaType = 'application/vnd.ms-tnef';

export const commentList = ['TNEF message'];
export const acronym = 'TNEF';
export const expandedAcronym = 'Transport Neutral Encapsulation Format';
export const genericIconName = null;
export const aliasList = ['application/ms-tnef'];
export const subClassOfList = [];
export const globList = [
  {
    pattern: '*.tnef',
    weight: null,
    caseSensitive: false,
  },
  {
    pattern: '*.tnf',
    weight: null,
    caseSensitive: false,
  },
  {
    pattern: 'winmail.dat',
    weight: null,
    caseSensitive: false,
  },
];
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
