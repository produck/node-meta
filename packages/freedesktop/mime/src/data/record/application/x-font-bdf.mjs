/** The media type this record describes. */
export const mediaType = 'application/x-font-bdf';

export const commentList = ['BDF font'];
export const acronym = null;
export const expandedAcronym = null;
export const genericIconName = 'font-x-generic';
export const aliasList = [];
export const subClassOfList = [];
export const globList = [
  {
    pattern: '*.bdf',
    weight: null,
    caseSensitive: false,
  },
];
export const magicList = [
  {
    priority: null,
    matchList: [
      {
        type: 'string',
        value: 'STARTFONT\\040',
        offset: '0',
        mask: null,
        matchList: [],
      },
    ],
  },
];
export const treeMagicList = [];
export const rootXmlList = [];
