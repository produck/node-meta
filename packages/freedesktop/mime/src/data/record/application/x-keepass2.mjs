/** The media type this record describes. */
export const mediaType = 'application/x-keepass2';

export const commentList = ['KeePass v2.x KDBX database'];
export const acronym = 'KDBX';
export const expandedAcronym = 'Keepass DataBase eXtensible markup language';
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
            value: '0xB54BFB67',
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
const glob0 = '*.kdbx';

export const globList = [
  {
    pattern: glob0,
    weight: null,
    caseSensitive: false,
  },
];

export const globPatternList = [glob0];
