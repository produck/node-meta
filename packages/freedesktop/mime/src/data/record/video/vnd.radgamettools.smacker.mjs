/** The media type this record describes. */
export const mediaType = 'video/vnd.radgamettools.smacker';

export const commentList = ['Smacker Video'];
export const acronym = null;
export const expandedAcronym = null;
export const genericIconName = null;
export const aliasList = [];
export const subClassOfList = [];
export const globList = [
  {
    pattern: '*.smk',
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
        value: 'SMK',
        offset: '0',
        mask: null,
        matchList: [
          {
            type: 'string',
            value: '2',
            offset: '3',
            mask: null,
            matchList: [],
          },
          {
            type: 'string',
            value: '4',
            offset: '3',
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
