/** The media type this record describes. */
export const mediaType = 'application/vnd.apple.pkpass';

export const commentList = ['Apple Wallet pass'];
export const acronym = null;
export const expandedAcronym = null;
export const genericIconName = null;
export const aliasList = [];
export const subClassOfList = ['application/zip'];
export const globList = [
  {
    pattern: '*.pkpass',
    weight: null,
    caseSensitive: false,
  },
];
export const magicList = [
  {
    priority: 65,
    matchList: [
      {
        type: 'string',
        value: 'PK\\003\\004',
        offset: '0',
        mask: null,
        matchList: [
          {
            type: 'string',
            value: 'pass.json',
            offset: '30',
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
