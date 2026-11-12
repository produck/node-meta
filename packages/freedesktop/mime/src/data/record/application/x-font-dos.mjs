/** The media type this record describes. */
export const mediaType = 'application/x-font-dos';

export const commentList = ['DOS font'];
export const acronym = null;
export const expandedAcronym = null;
export const genericIconName = 'font-x-generic';
export const aliasList = [];
export const subClassOfList = [];
export const magicList = [
  {
    priority: null,
    matchList: [
      {
        type: 'string',
        value: '\\xff\\x46\\x4f\\x4e',
        offset: '0',
        mask: null,
        matchList: [],
      },
      {
        type: 'string',
        value: '\\x00\\x45\\x47\\x41',
        offset: '7',
        mask: null,
        matchList: [],
      },
      {
        type: 'string',
        value: '\\x00\\x56\\x49\\x44',
        offset: '7',
        mask: null,
        matchList: [],
      },
    ],
  },
];
export const treeMagicList = [];
export const rootXmlList = [];

export const globList = [];

export const globPatternList = [];
