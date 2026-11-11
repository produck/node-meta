/** The media type this record describes. */
export const mediaType = 'image/heif';

export const commentList = ['HEIF image'];
export const acronym = 'HEIF';
export const expandedAcronym = 'High Efficiency Image File';
export const genericIconName = null;
export const aliasList = [
  'image/heic',
  'image/heic-sequence',
  'image/heif-sequence',
];
export const subClassOfList = [];
export const globList = [
  {
    pattern: '*.heic',
    weight: null,
    caseSensitive: false,
  },
  {
    pattern: '*.heif',
    weight: null,
    caseSensitive: false,
  },
  {
    pattern: '*.hif',
    weight: null,
    caseSensitive: false,
  },
];
export const magicList = [
  {
    priority: 40,
    matchList: [
      {
        type: 'string',
        value: 'ftypmif1',
        offset: '4',
        mask: null,
        matchList: [],
      },
      {
        type: 'string',
        value: 'ftypmsf1',
        offset: '4',
        mask: null,
        matchList: [],
      },
      {
        type: 'string',
        value: 'ftypheic',
        offset: '4',
        mask: null,
        matchList: [],
      },
      {
        type: 'string',
        value: 'ftypheix',
        offset: '4',
        mask: null,
        matchList: [],
      },
      {
        type: 'string',
        value: 'ftyphevc',
        offset: '4',
        mask: null,
        matchList: [],
      },
      {
        type: 'string',
        value: 'ftyphevx',
        offset: '4',
        mask: null,
        matchList: [],
      },
    ],
  },
];
export const treeMagicList = [];
export const rootXmlList = [];
