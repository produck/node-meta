/** The media type this record describes. */
export const mediaType = 'audio/x-669';

export const commentList = ['Composer 669 audio'];
export const acronym = null;
export const expandedAcronym = null;
export const genericIconName = null;
export const aliasList = ['audio/x-669-mod'];
export const subClassOfList = [];
export const magicList = [
  {
    priority: 40,
    matchList: [
      {
        type: 'byte',
        value: '0x0',
        offset: '112',
        mask: '0x80',
        matchList: [
          {
            type: 'string',
            value: 'if',
            offset: '0',
            mask: null,
            matchList: [
              {
                type: 'byte',
                value: '0x0',
                offset: '368',
                mask: '0xe0',
                matchList: [
                  {
                    type: 'byte',
                    value: '0x0',
                    offset: '110',
                    mask: '0xc0',
                    matchList: [
                      {
                        type: 'byte',
                        value: '0x0',
                        offset: '111',
                        mask: '0x80',
                        matchList: [],
                      },
                      {
                        type: 'byte',
                        value: '0x80',
                        offset: '111',
                        mask: null,
                        matchList: [],
                      },
                    ],
                  },
                  {
                    type: 'byte',
                    value: '0x40',
                    offset: '110',
                    mask: null,
                    matchList: [
                      {
                        type: 'byte',
                        value: '0x0',
                        offset: '111',
                        mask: '0x80',
                        matchList: [],
                      },
                      {
                        type: 'byte',
                        value: '0x80',
                        offset: '111',
                        mask: null,
                        matchList: [],
                      },
                    ],
                  },
                ],
              },
              {
                type: 'byte',
                value: '0x20',
                offset: '368',
                mask: null,
                matchList: [
                  {
                    type: 'byte',
                    value: '0x0',
                    offset: '110',
                    mask: '0xc0',
                    matchList: [
                      {
                        type: 'byte',
                        value: '0x0',
                        offset: '111',
                        mask: '0x80',
                        matchList: [],
                      },
                      {
                        type: 'byte',
                        value: '0x80',
                        offset: '111',
                        mask: null,
                        matchList: [],
                      },
                    ],
                  },
                  {
                    type: 'byte',
                    value: '0x40',
                    offset: '110',
                    mask: null,
                    matchList: [
                      {
                        type: 'byte',
                        value: '0x0',
                        offset: '111',
                        mask: '0x80',
                        matchList: [],
                      },
                      {
                        type: 'byte',
                        value: '0x80',
                        offset: '111',
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
            type: 'string',
            value: 'JN',
            offset: '0',
            mask: null,
            matchList: [
              {
                type: 'byte',
                value: '0x0',
                offset: '368',
                mask: '0xe0',
                matchList: [
                  {
                    type: 'byte',
                    value: '0x0',
                    offset: '110',
                    mask: '0xc0',
                    matchList: [
                      {
                        type: 'byte',
                        value: '0x0',
                        offset: '111',
                        mask: '0x80',
                        matchList: [],
                      },
                      {
                        type: 'byte',
                        value: '0x80',
                        offset: '111',
                        mask: null,
                        matchList: [],
                      },
                    ],
                  },
                ],
              },
              {
                type: 'byte',
                value: '0x20',
                offset: '368',
                mask: null,
                matchList: [
                  {
                    type: 'byte',
                    value: '0x40',
                    offset: '110',
                    mask: null,
                    matchList: [
                      {
                        type: 'byte',
                        value: '0x0',
                        offset: '111',
                        mask: '0x80',
                        matchList: [],
                      },
                      {
                        type: 'byte',
                        value: '0x80',
                        offset: '111',
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
const glob0 = '*.669';
const glob1 = '*.uni';

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
