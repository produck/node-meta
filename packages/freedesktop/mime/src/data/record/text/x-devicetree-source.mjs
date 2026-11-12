/** The media type this record describes. */
export const mediaType = 'text/x-devicetree-source';

export const commentList = ['Devicetree source code'];
export const acronym = 'DTS';
export const expandedAcronym = 'Device Tree Source';
export const genericIconName = null;
export const aliasList = [];
export const subClassOfList = ['text/plain'];
export const magicList = [
  {
    priority: null,
    matchList: [
      {
        type: 'string',
        value: '\\000\\000',
        offset: '0',
        mask: '0x8080',
        matchList: [
          {
            type: 'string',
            value: '/dts-v1/',
            offset: '0:4080',
            mask: null,
            matchList: [],
          },
        ],
      },
    ],
  },
  {
    priority: 40,
    matchList: [
      {
        type: 'string',
        value: '\\000\\000',
        offset: '0',
        mask: '0x8080',
        matchList: [
          {
            type: 'string',
            value: '/ {',
            offset: '0:4090',
            mask: null,
            matchList: [],
          },
          {
            type: 'string',
            value: 'include ',
            offset: '0:4080',
            mask: null,
            matchList: [
              {
                type: 'string',
                value: '.dts',
                offset: '10:4090',
                mask: null,
                matchList: [],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    priority: 10,
    matchList: [
      {
        type: 'string',
        value: '#include ',
        offset: '0',
        mask: null,
        matchList: [],
      },
      {
        type: 'string',
        value: '/*',
        offset: '0',
        mask: null,
        matchList: [],
      },
      {
        type: 'string',
        value: '//',
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
const glob0 = '*.dts';
const glob1 = '*.dtsi';

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
