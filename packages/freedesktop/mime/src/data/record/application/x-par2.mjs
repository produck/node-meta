/** The media type this record describes. */
export const mediaType = 'application/x-par2';

export const commentList = ['Parchive archive'];
export const acronym = 'Parchive';
export const expandedAcronym = 'Parity Volume Set Archive';
export const genericIconName = 'package-x-generic';
export const aliasList = [];
export const subClassOfList = [];
export const globList = [
  {
    pattern: '*.PAR2',
    weight: null,
    caseSensitive: false,
  },
  {
    pattern: '*.par2',
    weight: null,
    caseSensitive: false,
  },
];
export const magicList = [
  {
    priority: 60,
    matchList: [
      {
        type: 'string',
        value: 'PAR2',
        offset: '0',
        mask: null,
        matchList: [],
      },
    ],
  },
];
export const treeMagicList = [];
export const rootXmlList = [];
