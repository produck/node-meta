/** The media type this record describes. */
export const mediaType = 'application/x-sega-cd-rom';

export const commentList = ['Sega CD disc image'];
export const acronym = null;
export const expandedAcronym = null;
export const genericIconName = 'application-x-executable';
export const aliasList = [];
export const subClassOfList = [];
export const globList = [
  {
    pattern: '*.iso',
    weight: null,
    caseSensitive: false,
  },
];
export const magicList = [
  {
    priority: 60,
    matchList: [
      {
        type: 'string',
        value: 'SEGADISCSYSTEM\\040\\040',
        offset: '0',
        mask: null,
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
            value: '\\040SEGA',
            offset: '256',
            mask: null,
            matchList: [],
          },
        ],
      },
      {
        type: 'string',
        value: 'SEGABOOTDISC\\040\\040\\040\\040',
        offset: '0',
        mask: null,
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
            value: '\\040SEGA',
            offset: '256',
            mask: null,
            matchList: [],
          },
        ],
      },
      {
        type: 'string',
        value: 'SEGADISCSYSTEM\\040\\040',
        offset: '16',
        mask: null,
        matchList: [
          {
            type: 'string',
            value: 'SEGA',
            offset: '272',
            mask: null,
            matchList: [],
          },
          {
            type: 'string',
            value: '\\040SEGA',
            offset: '272',
            mask: null,
            matchList: [],
          },
        ],
      },
      {
        type: 'string',
        value: 'SEGABOOTDISC\\040\\040\\040\\040',
        offset: '16',
        mask: null,
        matchList: [
          {
            type: 'string',
            value: 'SEGA',
            offset: '272',
            mask: null,
            matchList: [],
          },
          {
            type: 'string',
            value: '\\040SEGA',
            offset: '272',
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
