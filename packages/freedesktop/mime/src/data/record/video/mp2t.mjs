/** The media type this record describes. */
export const mediaType = 'video/mp2t';

export const commentList = ['MPEG-2 transport stream'];
export const acronym = 'MPEG-2 TS';
export const expandedAcronym =
  'Moving Picture Experts Group 2 Transport Stream';
export const genericIconName = null;
export const aliasList = [];
export const subClassOfList = [];
export const magicList = [
  {
    priority: null,
    matchList: [
      {
        type: 'byte',
        value: '0x47',
        offset: '0',
        mask: null,
        matchList: [
          {
            type: 'byte',
            value: '0x47',
            offset: '188',
            mask: null,
            matchList: [
              {
                type: 'byte',
                value: '0x47',
                offset: '376',
                mask: null,
                matchList: [
                  {
                    type: 'byte',
                    value: '0x47',
                    offset: '564',
                    mask: null,
                    matchList: [
                      {
                        type: 'byte',
                        value: '0x47',
                        offset: '752',
                        mask: null,
                        matchList: [],
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        type: 'byte',
        value: '0x47',
        offset: '4',
        mask: null,
        matchList: [
          {
            type: 'byte',
            value: '0x47',
            offset: '196',
            mask: null,
            matchList: [
              {
                type: 'byte',
                value: '0x47',
                offset: '388',
                mask: null,
                matchList: [
                  {
                    type: 'byte',
                    value: '0x47',
                    offset: '580',
                    mask: null,
                    matchList: [
                      {
                        type: 'byte',
                        value: '0x47',
                        offset: '772',
                        mask: null,
                        matchList: [],
                      },
                    ],
                  },
                ],
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
const glob0 = '*.m2t';
const glob1 = '*.m2ts';
const glob2 = '*.ts';
const glob3 = '*.mts';
const glob4 = '*.cpi';
const glob5 = '*.clpi';
const glob6 = '*.mpl';
const glob7 = '*.mpls';
const glob8 = '*.bdm';
const glob9 = '*.bdmv';

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
  {
    pattern: glob3,
    weight: null,
    caseSensitive: false,
  },
  {
    pattern: glob4,
    weight: null,
    caseSensitive: false,
  },
  {
    pattern: glob5,
    weight: null,
    caseSensitive: false,
  },
  {
    pattern: glob6,
    weight: null,
    caseSensitive: false,
  },
  {
    pattern: glob7,
    weight: null,
    caseSensitive: false,
  },
  {
    pattern: glob8,
    weight: null,
    caseSensitive: false,
  },
  {
    pattern: glob9,
    weight: null,
    caseSensitive: false,
  },
];

export const globPatternList = [
  glob0,
  glob1,
  glob2,
  glob3,
  glob4,
  glob5,
  glob6,
  glob7,
  glob8,
  glob9,
];
