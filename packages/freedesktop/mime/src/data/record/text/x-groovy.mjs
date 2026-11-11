/** The media type this record describes. */
export const mediaType = 'text/x-groovy';

export const commentList = ['Groovy source code'];
export const acronym = null;
export const expandedAcronym = null;
export const genericIconName = 'text-x-script';
export const aliasList = [];
export const subClassOfList = ['text/plain'];
export const globList = [
  {
    pattern: '*.groovy',
    weight: null,
    caseSensitive: false,
  },
  {
    pattern: '*.gvy',
    weight: null,
    caseSensitive: false,
  },
  {
    pattern: '*.gy',
    weight: null,
    caseSensitive: false,
  },
  {
    pattern: '*.gsh',
    weight: null,
    caseSensitive: false,
  },
];
export const magicList = [
  {
    priority: 10,
    matchList: [
      {
        type: 'string',
        value: '//',
        offset: '0',
        mask: null,
        matchList: [],
      },
      {
        type: 'string',
        value: '/*',
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
        value: 'import',
        offset: '0',
        mask: null,
        matchList: [],
      },
      {
        type: 'string',
        value: 'package',
        offset: '0',
        mask: null,
        matchList: [],
      },
    ],
  },
];
export const treeMagicList = [];
export const rootXmlList = [];
