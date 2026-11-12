/** The media type this record describes. */
export const mediaType = 'text/x-modelica';

export const commentList = ['Modelica model'];
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
        value: '//',
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
      {
        type: 'string',
        value: 'class',
        offset: '0',
        mask: null,
        matchList: [],
      },
      {
        type: 'string',
        value: 'model',
        offset: '0',
        mask: null,
        matchList: [],
      },
      {
        type: 'string',
        value: 'record',
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
const glob0 = '*.mo';

export const globList = [
  {
    pattern: glob0,
    weight: null,
    caseSensitive: false,
  },
];

export const globPatternList = [glob0];
