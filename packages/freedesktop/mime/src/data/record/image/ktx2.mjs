/** The media type this record describes. */
export const mediaType = 'image/ktx2';

export const commentList = ['Khronos texture image'];
export const acronym = null;
export const expandedAcronym = null;
export const genericIconName = null;
export const aliasList = [];
export const subClassOfList = [];
export const magicList = [
  {
    priority: 80,
    matchList: [
      {
        type: 'big32',
        value: '0xAB4B5458',
        offset: '0',
        mask: null,
        matchList: [
          {
            type: 'big32',
            value: '0x203230BB',
            offset: '4',
            mask: null,
            matchList: [
              {
                type: 'big32',
                value: '0x0D0A1A0A',
                offset: '8',
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
const glob0 = '*.ktx2';

export const globList = [
  {
    pattern: glob0,
    weight: null,
    caseSensitive: false,
  },
];

export const globPatternList = [glob0];
