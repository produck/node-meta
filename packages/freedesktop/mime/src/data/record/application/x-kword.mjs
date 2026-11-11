/** The media type this record describes. */
export const mediaType = 'application/x-kword';

export const commentList = ['KWord document'];
export const acronym = null;
export const expandedAcronym = null;
export const genericIconName = 'x-office-document';
export const aliasList = [];
export const subClassOfList = [];
export const globList = [
  {
    pattern: '*.kwd',
    weight: null,
    caseSensitive: false,
  },
  {
    pattern: '*.kwt',
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
                value: 'application/x-kword\\004\\006',
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
                value: 'application/x-kword',
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
