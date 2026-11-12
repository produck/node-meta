/** The media type this record describes. */
export const mediaType = 'text/x-nawk';

export const commentList = ['New (BWK) AWK script'];
export const acronym = 'New (BWK) AWK';
export const expandedAcronym =
  'New (Brian Wilson Kernighan) [Alfred Vaino] Aho, [Peter Jay] Weinberger and [Brian Wilson] Kernighan [language]';
export const genericIconName = 'text-x-script';
export const aliasList = [];
export const subClassOfList = ['text/x-awk'];
export const magicList = [
  {
    priority: null,
    matchList: [
      {
        type: 'string',
        value: '#!',
        offset: '0',
        mask: null,
        matchList: [
          {
            type: 'string',
            value: '/bin/nawk',
            offset: '2:16',
            mask: null,
            matchList: [],
          },
          {
            type: 'string',
            value: '/bin/env nawk',
            offset: '2:16',
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

/** About glob */
const glob0 = '*.awk';

export const globList = [
  {
    pattern: glob0,
    weight: null,
    caseSensitive: false,
  },
];

export const globPatternList = [glob0];
