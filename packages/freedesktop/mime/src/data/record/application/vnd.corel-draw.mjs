/** The media type this record describes. */
export const mediaType = 'application/vnd.corel-draw';

export const commentList = ['Corel Draw drawing'];
export const acronym = null;
export const expandedAcronym = null;
export const genericIconName = 'image-x-generic';
export const aliasList = [
  'application/cdr',
  'application/coreldraw',
  'application/x-cdr',
  'application/x-coreldraw',
  'image/cdr',
  'image/x-cdr',
  'zz-application/zz-winassoc-cdr',
];
export const subClassOfList = [];
export const globList = [
  {
    pattern: '*.cdr',
    weight: null,
    caseSensitive: false,
  },
];
export const magicList = [
  {
    priority: null,
    matchList: [
      {
        type: 'string',
        value: 'WL\\0\\0',
        offset: '0',
        mask: '0xffff00ff',
        matchList: [],
      },
      {
        type: 'string',
        value: 'RIFF',
        offset: '0',
        mask: null,
        matchList: [
          {
            type: 'string',
            value: 'vrsn',
            offset: '12',
            mask: null,
            matchList: [
              {
                type: 'string',
                value: 'CDR',
                offset: '8',
                mask: null,
                matchList: [],
              },
              {
                type: 'string',
                value: 'cdr',
                offset: '8',
                mask: null,
                matchList: [],
              },
            ],
          },
        ],
      },
      {
        type: 'string',
        value: 'LIST',
        offset: '0',
        mask: null,
        matchList: [
          {
            type: 'string',
            value: 'cmpr',
            offset: '8',
            mask: null,
            matchList: [],
          },
          {
            type: 'string',
            value: 'doc mcfg',
            offset: '8',
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
