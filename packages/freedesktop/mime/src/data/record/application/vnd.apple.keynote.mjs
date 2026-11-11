/** The media type this record describes. */
export const mediaType = 'application/vnd.apple.keynote';

export const commentList = ['Apple Keynote 5 presentation'];
export const acronym = null;
export const expandedAcronym = null;
export const genericIconName = 'x-office-presentation';
export const aliasList = ['application/x-iwork-keynote-sffkey'];
export const subClassOfList = ['application/zip'];
export const globList = [
  {
    pattern: '*.key',
    weight: 80,
    caseSensitive: false,
  },
];
export const magicList = [
  {
    priority: 70,
    matchList: [
      {
        type: 'string',
        value: 'PK\\003\\004',
        offset: '0',
        mask: null,
        matchList: [
          {
            type: 'string',
            value: 'index.apxl',
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
