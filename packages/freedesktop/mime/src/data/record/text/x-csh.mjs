/** The media type this record describes. */
export const mediaType = 'text/x-csh';

export const commentList = ['C shell script'];
export const acronym = null;
export const expandedAcronym = null;
export const genericIconName = 'text-x-script';
export const aliasList = ['application/x-csh'];
export const subClassOfList = [
  'text/x-shellscript',
  'application/x-executable',
];
export const globList = [
  {
    pattern: '*.csh',
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
            value: '/bin/tcsh',
            offset: '2:16',
            mask: null,
            matchList: [],
          },
          {
            type: 'string',
            value: '/bin/csh',
            offset: '2:16',
            mask: null,
            matchList: [],
          },
          {
            type: 'string',
            value: '/bin/env csh',
            offset: '2:16',
            mask: null,
            matchList: [],
          },
          {
            type: 'string',
            value: '/bin/env tcsh',
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
