/** The media type this record describes. */
export const mediaType = 'application/x-keepass';

export const commentList = ['KeePass v1.x KDB database'];
export const acronym = 'KDB';
export const expandedAcronym = 'Keepass DataBase';
export const genericIconName = null;
export const aliasList = [];
export const subClassOfList = [];
export const magicList = [
  {
    priority: null,
    matchList: [
      {
        type: 'little32',
        value: '0x9AA2D903',
        offset: '0',
        mask: null,
        matchList: [
          {
            type: 'little32',
            value: '0xB54BFB65',
            offset: '4',
            mask: null,
            matchList: [],
          },
        ],
      },
    ],
  },
];
export const treeMagicList = [];
export const rootXmlList = [];

/** About glob */
const glob0 = '*.kdb';

export const globList = [
  {
    pattern: glob0,
    weight: null,
    caseSensitive: false,
  },
];

export const globPatternList = [glob0];
