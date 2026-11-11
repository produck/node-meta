/** The media type this record describes. */
export const mediaType = 'application/typescript';

export const commentList = ['TypeScript program'];
export const acronym = null;
export const expandedAcronym = null;
export const genericIconName = 'text-x-script';
export const aliasList = [];
export const subClassOfList = ['text/tsx'];
export const globList = [
  {
    pattern: '*.cts',
    weight: null,
    caseSensitive: false,
  },
  {
    pattern: '*.mts',
    weight: 40,
    caseSensitive: false,
  },
  {
    pattern: '*.ts',
    weight: 40,
    caseSensitive: false,
  },
];
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
