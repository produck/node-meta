/** The media type this record describes. */
export const mediaType = 'application/x-applix-word';

export const commentList = ['Applix Words document'];
export const acronym = null;
export const expandedAcronym = null;
export const genericIconName = 'x-office-document';
export const aliasList = [];
export const subClassOfList = [];
export const globList = [
  {
    pattern: '*.aw',
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
        value: '*BEGIN',
        offset: '0',
        mask: null,
        matchList: [
          {
            type: 'string',
            value: 'WORDS',
            offset: '7',
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
