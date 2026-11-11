/** The media type this record describes. */
export const mediaType = 'image/x-aseprite';

export const commentList = ['Aseprite image'];
export const acronym = 'ASE';
export const expandedAcronym = 'Allegro Sprite Editor';
export const genericIconName = null;
export const aliasList = [];
export const subClassOfList = [];
export const globList = [
  {
    pattern: '*.ase',
    weight: null,
    caseSensitive: false,
  },
  {
    pattern: '*.aseprite',
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
