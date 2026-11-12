/** The media type this record describes. */
export const mediaType = 'image/x-minolta-mrw';

export const commentList = ['Minolta MRW raw image'];
export const acronym = 'MRW';
export const expandedAcronym = 'Minolta RaW';
export const genericIconName = null;
export const aliasList = [];
export const subClassOfList = ['image/x-dcraw'];
export const magicList = [
  {
    priority: null,
    matchList: [
      {
        type: 'string',
        value: '\\x00MRM',
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
const glob0 = '*.mrw';

export const globList = [
  {
    pattern: glob0,
    weight: null,
    caseSensitive: false,
  },
];

export const globPatternList = [glob0];
