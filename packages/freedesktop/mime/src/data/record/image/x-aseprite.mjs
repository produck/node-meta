/** The media type this record describes. */
export const mediaType = 'image/x-aseprite';

export const commentList = ['Aseprite image'];
export const acronym = 'ASE';
export const expandedAcronym = 'Allegro Sprite Editor';
export const genericIconName = null;
export const aliasList = [];
export const subClassOfList = [];
export const magicList = [
  {
    priority: null,
    matchList: [
      {
        type: 'little16',
        value: '0xA5E0',
        offset: '4',
        mask: null,
        matchList: [
          {
            type: 'little16',
            value: '0x0000',
            offset: '20',
            mask: null,
            matchList: [
              {
                type: 'little16',
                value: '0x0000',
                offset: '24',
                mask: null,
                matchList: [],
              },
            ],
          },
        ],
      },
    ],
  },
];
export const treeMagicList = [];
export const rootXmlList = [];

/** About glob */
const glob0 = '*.ase';
const glob1 = '*.aseprite';

export const globList = [
  {
    pattern: glob0,
    weight: null,
    caseSensitive: false,
  },
  {
    pattern: glob1,
    weight: null,
    caseSensitive: false,
  },
];

export const globPatternList = [glob0, glob1];
