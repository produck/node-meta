/** The media type this record describes. */
export const mediaType = 'application/vnd.apple.numbers';

export const commentList = ['Apple Numbers spreadsheet'];
export const acronym = null;
export const expandedAcronym = null;
export const genericIconName = 'x-office-spreadsheet';
export const aliasList = ['application/x-iwork-numbers-sffnumbers'];
export const subClassOfList = ['application/zip'];
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
            value: 'index.xml',
            offset: '30',
            mask: null,
            matchList: [],
          },
          {
            type: 'string',
            value: 'Index/Document.iwa',
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

/** About glob */
const glob0 = '*.numbers';

export const globList = [
  {
    pattern: glob0,
    weight: null,
    caseSensitive: false,
  },
];

export const globPatternList = [glob0];
