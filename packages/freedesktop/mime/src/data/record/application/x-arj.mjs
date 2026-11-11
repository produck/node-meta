/** The media type this record describes. */
export const mediaType = 'application/x-arj';

export const commentList = ['ARJ archive'];
export const acronym = 'ARJ';
export const expandedAcronym = 'Archived by Robert Jung';
export const genericIconName = 'package-x-generic';
export const aliasList = [];
export const subClassOfList = [];
export const globList = [
  {
    pattern: '*.arj',
    weight: null,
    caseSensitive: false,
  },
];
export const magicList = [
  {
    priority: null,
    matchList: [
      {
        type: 'little16',
        value: '0xea60',
        offset: '0',
        mask: null,
        matchList: [],
      },
    ],
  },
];
export const treeMagicList = [];
export const rootXmlList = [];
