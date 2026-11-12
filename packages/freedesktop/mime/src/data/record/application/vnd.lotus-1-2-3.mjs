/** The media type this record describes. */
export const mediaType = 'application/vnd.lotus-1-2-3';

export const commentList = ['Lotus 1-2-3 spreadsheet'];
export const acronym = null;
export const expandedAcronym = null;
export const genericIconName = 'x-office-spreadsheet';
export const aliasList = [
  'application/x-lotus123',
  'application/x-123',
  'application/lotus123',
  'application/wk1',
  'zz-application/zz-winassoc-123',
];
export const subClassOfList = [];
export const magicList = [
  {
    priority: null,
    matchList: [
      {
        type: 'string',
        value:
          '\\x00\\x00\\x02\\x00\\x06\\x04\\x06\\x00\\x08\\x00\\x00\\x00\\x00\\x00',
        offset: '0',
        mask: null,
        matchList: [],
      },
    ],
  },
];
export const treeMagicList = [];
export const rootXmlList = [];

/** About glob */
const glob0 = '*.123';
const glob1 = '*.wk1';
const glob2 = '*.wk3';
const glob3 = '*.wk4';
const glob4 = '*.wks';

export const globList = [
  {
    pattern: glob0,
    weight: null,
    caseSensitive: false,
  },
  {
    pattern: glob1,
    weight: null,
    caseSensitive: false,
  },
  {
    pattern: glob2,
    weight: null,
    caseSensitive: false,
  },
  {
    pattern: glob3,
    weight: null,
    caseSensitive: false,
  },
  {
    pattern: glob4,
    weight: null,
    caseSensitive: false,
  },
];

export const globPatternList = [glob0, glob1, glob2, glob3, glob4];
