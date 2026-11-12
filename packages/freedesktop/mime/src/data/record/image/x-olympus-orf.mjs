/** The media type this record describes. */
export const mediaType = 'image/x-olympus-orf';

export const commentList = ['Olympus ORF raw image'];
export const acronym = 'ORF';
export const expandedAcronym = 'Olympus Raw Format';
export const genericIconName = null;
export const aliasList = [];
export const subClassOfList = ['image/x-dcraw'];
export const magicList = [
  {
    priority: null,
    matchList: [
      {
        type: 'string',
        value: 'IIRO\\x08\\x00\\x00\\x00',
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
const glob0 = '*.orf';

export const globList = [
  {
    pattern: glob0,
    weight: null,
    caseSensitive: false,
  },
];

export const globPatternList = [glob0];
