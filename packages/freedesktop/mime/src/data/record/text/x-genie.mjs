/** The media type this record describes. */
export const mediaType = 'text/x-genie';

export const commentList = ['Genie source code'];
export const acronym = null;
export const expandedAcronym = null;
export const genericIconName = null;
export const aliasList = [];
export const subClassOfList = ['text/plain'];
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
        value: 'def',
        offset: '0',
        mask: null,
        matchList: [],
      },
      {
        type: 'string',
        value: 'interface',
        offset: '0',
        mask: null,
        matchList: [],
      },
      {
        type: 'string',
        value: 'namespace',
        offset: '0',
        mask: null,
        matchList: [],
      },
      {
        type: 'string',
        value: 'struct',
        offset: '0',
        mask: null,
        matchList: [],
      },
      {
        type: 'string',
        value: 'uses',
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
const glob0 = '*.gs';

export const globList = [
  {
    pattern: glob0,
    weight: null,
    caseSensitive: true,
  },
];

export const globPatternList = [glob0];
