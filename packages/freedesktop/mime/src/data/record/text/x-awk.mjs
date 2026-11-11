/** The media type this record describes. */
export const mediaType = 'text/x-awk';

export const commentList = ['AWK script'];
export const acronym = 'AWK';
export const expandedAcronym =
  '[Alfred Vaino] Aho, [Peter Jay] Weinberger and [Brian Wilson] Kernighan [language]';
export const genericIconName = 'text-x-script';
export const aliasList = [];
export const subClassOfList = ['application/x-executable'];
export const globList = [
  {
    pattern: '*.awk',
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
        value: '#!',
        offset: '0',
        mask: null,
        matchList: [
          {
            type: 'string',
            value: '/bin/awk',
            offset: '2:16',
            mask: null,
            matchList: [],
          },
          {
            type: 'string',
            value: '/bin/env awk',
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
