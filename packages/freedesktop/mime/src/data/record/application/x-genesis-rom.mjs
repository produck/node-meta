/** The media type this record describes. */
export const mediaType = 'application/x-genesis-rom';

export const commentList = ['Genesis ROM'];
export const acronym = null;
export const expandedAcronym = null;
export const genericIconName = 'application-x-executable';
export const aliasList = [];
export const subClassOfList = [];
export const globList = [
  {
    pattern: '*.gen',
    weight: null,
    caseSensitive: false,
  },
  {
    pattern: '*.md',
    weight: 10,
    caseSensitive: false,
  },
  {
    pattern: '*.68k',
    weight: null,
    caseSensitive: false,
  },
  {
    pattern: '*.sgd',
    weight: null,
    caseSensitive: false,
  },
];
export const magicList = [
  {
    priority: 50,
    matchList: [
      {
        type: 'string',
        value: 'SEGA',
        offset: '256',
        mask: null,
        matchList: [],
      },
      {
        type: 'string',
        value: ' SEGA',
        offset: '256',
        mask: null,
        matchList: [],
      },
    ],
  },
];
export const treeMagicList = [];
export const rootXmlList = [];
