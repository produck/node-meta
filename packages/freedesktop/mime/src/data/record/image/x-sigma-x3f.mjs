/** The media type this record describes. */
export const mediaType = 'image/x-sigma-x3f';

export const commentList = ['Sigma X3F raw image'];
export const acronym = 'X3F';
export const expandedAcronym = 'X3 Foveon';
export const genericIconName = null;
export const aliasList = [];
export const subClassOfList = ['image/x-dcraw'];
export const magicList = [
  {
    priority: null,
    matchList: [
      {
        type: 'string',
        value: 'FOVb',
        offset: '0',
        mask: null,
        matchList: [
          {
            type: 'little32',
            value: '0x00FF00FF',
            offset: '4',
            mask: '0xFF00FF00',
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
const glob0 = '*.x3f';

export const globList = [
  {
    pattern: glob0,
    weight: null,
    caseSensitive: false,
  },
];

export const globPatternList = [glob0];
