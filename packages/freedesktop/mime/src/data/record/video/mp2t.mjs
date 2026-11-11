/** The media type this record describes. */
export const mediaType = 'video/mp2t';

export const commentList = ['MPEG-2 transport stream'];
export const acronym = 'MPEG-2 TS';
export const expandedAcronym =
  'Moving Picture Experts Group 2 Transport Stream';
export const genericIconName = null;
export const aliasList = [];
export const subClassOfList = [];
export const globList = [
  {
    pattern: '*.m2t',
    weight: null,
    caseSensitive: false,
  },
  {
    pattern: '*.m2ts',
    weight: null,
    caseSensitive: false,
  },
  {
    pattern: '*.ts',
    weight: null,
    caseSensitive: false,
  },
  {
    pattern: '*.mts',
    weight: null,
    caseSensitive: false,
  },
  {
    pattern: '*.cpi',
    weight: null,
    caseSensitive: false,
  },
  {
    pattern: '*.clpi',
    weight: null,
    caseSensitive: false,
  },
  {
    pattern: '*.mpl',
    weight: null,
    caseSensitive: false,
  },
  {
    pattern: '*.mpls',
    weight: null,
    caseSensitive: false,
  },
  {
    pattern: '*.bdm',
    weight: null,
    caseSensitive: false,
  },
  {
    pattern: '*.bdmv',
    weight: null,
    caseSensitive: false,
  },
];
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
