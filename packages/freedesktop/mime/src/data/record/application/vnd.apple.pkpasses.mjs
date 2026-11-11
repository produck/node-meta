/** The media type this record describes. */
export const mediaType = 'application/vnd.apple.pkpasses';

export const commentList = ['Apple Wallet passes bundle'];
export const acronym = null;
export const expandedAcronym = null;
export const genericIconName = null;
export const aliasList = [];
export const subClassOfList = ['application/zip'];
export const globList = [
  {
    pattern: '*.pkpasses',
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
            value: '.pkpass',
            offset: '30:256',
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
