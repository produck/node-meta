/** The media type this record describes. */
export const mediaType = 'application/vnd.chess-pgn';

export const commentList = ['PGN chess game notation'];
export const acronym = 'PGN';
export const expandedAcronym = 'Portable Game Notation';
export const genericIconName = 'text-x-generic';
export const aliasList = ['application/x-chess-pgn'];
export const subClassOfList = ['text/plain'];
export const magicList = [
  {
    priority: null,
    matchList: [
      {
        type: 'string',
        value: '[Event ',
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
const glob0 = '*.pgn';

export const globList = [
  {
    pattern: glob0,
    weight: null,
    caseSensitive: false,
  },
];

export const globPatternList = [glob0];
