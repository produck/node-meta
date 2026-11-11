/** The media type this record describes. */
export const mediaType = 'application/vnd.apache.parquet';

export const commentList = ['Apache Parquet file'];
export const acronym = null;
export const expandedAcronym = null;
export const genericIconName = 'x-office-spreadsheet';
export const aliasList = ['application/x-parquet'];
export const subClassOfList = [];
export const globList = [
  {
    pattern: '*.parquet',
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
        value: 'PAR1',
        offset: '0',
        mask: null,
        matchList: [],
      },
      {
        type: 'string',
        value: 'PARE',
        offset: '0',
        mask: null,
        matchList: [],
      },
    ],
  },
];
export const treeMagicList = [];
export const rootXmlList = [];
