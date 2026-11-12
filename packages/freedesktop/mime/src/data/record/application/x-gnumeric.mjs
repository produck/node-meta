/** The media type this record describes. */
export const mediaType = 'application/x-gnumeric';

export const commentList = ['Gnumeric spreadsheet'];
export const acronym = null;
export const expandedAcronym = null;
export const genericIconName = 'x-office-spreadsheet';
export const aliasList = [];
export const subClassOfList = [];
export const magicList = [
  {
    priority: null,
    matchList: [
      {
        type: 'string',
        value: 'gmr:Workbook',
        offset: '0:64',
        mask: null,
        matchList: [],
      },
      {
        type: 'string',
        value: 'gnm:Workbook',
        offset: '0:64',
        mask: null,
        matchList: [],
      },
    ],
  },
];
export const treeMagicList = [];
export const rootXmlList = [];

/** About glob */
const glob0 = '*.gnumeric';

export const globList = [
  {
    pattern: glob0,
    weight: null,
    caseSensitive: false,
  },
];

export const globPatternList = [glob0];
