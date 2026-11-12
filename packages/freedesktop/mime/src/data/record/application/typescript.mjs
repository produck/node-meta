/** The media type this record describes. */
export const mediaType = 'application/typescript';

export const commentList = ['TypeScript program'];
export const acronym = null;
export const expandedAcronym = null;
export const genericIconName = 'text-x-script';
export const aliasList = [];
export const subClassOfList = ['text/tsx'];
export const magicList = [
  {
    priority: 10,
    matchList: [
      {
        type: 'string',
        value: '/*',
        offset: '0',
        mask: null,
        matchList: [],
      },
      {
        type: 'string',
        value: '//',
        offset: '0',
        mask: null,
        matchList: [],
      },
      {
        type: 'string',
        value: 'class',
        offset: '0',
        mask: null,
        matchList: [],
      },
      {
        type: 'string',
        value: 'function',
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
const glob0 = '*.cts';
const glob1 = '*.mts';
const glob2 = '*.ts';

export const globList = [
  {
    pattern: glob0,
    weight: null,
    caseSensitive: false,
  },
  {
    pattern: glob1,
    weight: 40,
    caseSensitive: false,
  },
  {
    pattern: glob2,
    weight: 40,
    caseSensitive: false,
  },
];

export const globPatternList = [glob0, glob1, glob2];
