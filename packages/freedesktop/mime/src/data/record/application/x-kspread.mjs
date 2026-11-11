/** The media type this record describes. */
export const mediaType = 'application/x-kspread';

export const commentList = ['KSpread spreadsheet'];
export const acronym = null;
export const expandedAcronym = null;
export const genericIconName = 'x-office-spreadsheet';
export const aliasList = [];
export const subClassOfList = [];
export const globList = [
  {
    pattern: '*.ksp',
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
        value: '\\037\\213',
        offset: '0',
        mask: null,
        matchList: [
          {
            type: 'string',
            value: 'KOffice',
            offset: '10',
            mask: null,
            matchList: [
              {
                type: 'string',
                value: 'application/x-kspread\\004\\006',
                offset: '18',
                mask: null,
                matchList: [],
              },
            ],
          },
        ],
      },
      {
        type: 'string',
        value: 'PK\\003\\004',
        offset: '0',
        mask: null,
        matchList: [
          {
            type: 'string',
            value: 'mimetype',
            offset: '30',
            mask: null,
            matchList: [
              {
                type: 'string',
                value: 'application/x-kspread',
                offset: '38',
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
