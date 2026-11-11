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
export const globList = [
  {
    pattern: '*.123',
    weight: null,
    caseSensitive: false,
  },
  {
    pattern: '*.wk1',
    weight: null,
    caseSensitive: false,
  },
  {
    pattern: '*.wk3',
    weight: null,
    caseSensitive: false,
  },
  {
    pattern: '*.wk4',
    weight: null,
    caseSensitive: false,
  },
  {
    pattern: '*.wks',
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
