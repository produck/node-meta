/** The media type this record describes. */
export const mediaType = 'application/x-wii-rom';

export const commentList = ['Wii disc image'];
export const acronym = null;
export const expandedAcronym = null;
export const genericIconName = 'application-x-executable';
export const aliasList = [
  'application/x-wii-iso-image',
  'application/x-wbfs',
  'application/x-wia',
];
export const subClassOfList = [];
export const magicList = [
  {
    priority: null,
    matchList: [
      {
        type: 'big32',
        value: '0x5d1c9ea3',
        offset: '24',
        mask: null,
        matchList: [],
      },
      {
        type: 'string',
        value: 'WBFS',
        offset: '0',
        mask: null,
        matchList: [],
      },
      {
        type: 'string',
        value: 'WII\\001DISC',
        offset: '0',
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
            value: '2',
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
            value: '2',
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

/** About glob */
const glob0 = '*.rvz';
const glob1 = '*.wia';
const glob2 = '*.iso';

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
  {
    pattern: glob2,
    weight: null,
    caseSensitive: false,
  },
];

export const globPatternList = [glob0, glob1, glob2];
