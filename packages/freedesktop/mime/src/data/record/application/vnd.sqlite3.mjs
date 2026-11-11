/** The media type this record describes. */
export const mediaType = 'application/vnd.sqlite3';

export const commentList = ['SQLite3 database'];
export const acronym = null;
export const expandedAcronym = null;
export const genericIconName = null;
export const aliasList = ['application/x-sqlite3'];
export const subClassOfList = [];
export const globList = [
  {
    pattern: '*.sqlite3',
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
        value: 'SQLite format 3',
        offset: '0',
        mask: null,
        matchList: [],
      },
    ],
  },
];
export const treeMagicList = [];
export const rootXmlList = [];
