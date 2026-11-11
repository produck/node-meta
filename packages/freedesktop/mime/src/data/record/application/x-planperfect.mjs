/** The media type this record describes. */
export const mediaType = 'application/x-planperfect';

export const commentList = ['PlanPerfect spreadsheet'];
export const acronym = null;
export const expandedAcronym = null;
export const genericIconName = 'x-office-spreadsheet';
export const aliasList = [];
export const subClassOfList = [];
export const globList = [
  {
    pattern: '*.pln',
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
        value: '\\xffWPC',
        offset: '0',
        mask: null,
        matchList: [
          {
            type: 'byte',
            value: '9',
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
