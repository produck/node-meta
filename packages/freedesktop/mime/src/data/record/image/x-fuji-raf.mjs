/** The media type this record describes. */
export const mediaType = 'image/x-fuji-raf';

export const commentList = ['Fuji RAF raw image'];
export const acronym = 'RAF';
export const expandedAcronym = 'RAw Format';
export const genericIconName = null;
export const aliasList = [];
export const subClassOfList = ['image/x-dcraw'];
export const globList = [
  {
    pattern: '*.raf',
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
        value: 'FUJIFILMCCD-RAW ',
        offset: '0',
        mask: null,
        matchList: [],
      },
    ],
  },
];
export const treeMagicList = [];
export const rootXmlList = [];
