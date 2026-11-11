/** The media type this record describes. */
export const mediaType = 'application/x-gamecube-rom';

export const commentList = ['GameCube disc image'];
export const acronym = null;
export const expandedAcronym = null;
export const genericIconName = 'application-x-executable';
export const aliasList = ['application/x-gamecube-iso-image'];
export const subClassOfList = [];
export const globList = [
  {
    pattern: '*.rvz',
    weight: null,
    caseSensitive: false,
  },
  {
    pattern: '*.wia',
    weight: null,
    caseSensitive: false,
  },
  {
    pattern: '*.iso',
    weight: null,
    caseSensitive: false,
  },
];
export const magicList = [
  {
    priority: null,
    matchList: [
      {
        type: 'big32',
        value: '0xc2339f3d',
        offset: '28',
        mask: null,
        matchList: [],
      },
      {
        type: 'string',
        value: 'WIA\\x01',
        offset: '0',
        mask: null,
        matchList: [
          {
            type: 'big32',
            value: '1',
            offset: '72',
            mask: null,
            matchList: [],
          },
        ],
      },
      {
        type: 'string',
        value: 'RVZ\\x01',
        offset: '0',
        mask: null,
        matchList: [
          {
            type: 'big32',
            value: '1',
            offset: '72',
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
