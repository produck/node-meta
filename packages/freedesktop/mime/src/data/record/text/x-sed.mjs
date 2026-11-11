/** The media type this record describes. */
export const mediaType = 'text/x-sed';

export const commentList = ['sed script'];
export const acronym = 'SED';
export const expandedAcronym = 'Stream EDitor';
export const genericIconName = 'text-x-script';
export const aliasList = [];
export const subClassOfList = ['application/x-executable'];
export const globList = [
  {
    pattern: '*.sed',
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
            value: '/bin/sed',
            offset: '2:16',
            mask: null,
            matchList: [],
          },
          {
            type: 'string',
            value: '/bin/env sed',
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
