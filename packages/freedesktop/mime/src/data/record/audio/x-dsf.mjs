/** The media type this record describes. */
export const mediaType = 'audio/x-dsf';

export const commentList = ['DSF audio'];
export const acronym = 'DSF';
export const expandedAcronym = 'Direct stream digital Stream File';
export const genericIconName = null;
export const aliasList = ['audio/dsf', 'audio/x-dsd', 'audio/dsd'];
export const subClassOfList = [];
export const magicList = [
  {
    priority: null,
    matchList: [
      {
        type: 'string',
        value: 'DSD ',
        offset: '0',
        mask: null,
        matchList: [
          {
            type: 'string',
            value: 'fmt ',
            offset: '28',
            mask: null,
            matchList: [
              {
                type: 'string',
                value: 'data',
                offset: '80',
                mask: null,
                matchList: [],
              },
            ],
          },
        ],
      },
    ],
  },
];
export const treeMagicList = [];
export const rootXmlList = [];

/** About glob */
const glob0 = '*.dsf';

export const globList = [
  {
    pattern: glob0,
    weight: null,
    caseSensitive: false,
  },
];

export const globPatternList = [glob0];
