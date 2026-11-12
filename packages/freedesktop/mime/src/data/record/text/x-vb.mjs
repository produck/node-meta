/** The media type this record describes. */
export const mediaType = 'text/x-vb';

export const commentList = ['Visual Basic .NET source code'];
export const acronym = null;
export const expandedAcronym = null;
export const genericIconName = null;
export const aliasList = [];
export const subClassOfList = ['text/plain'];
export const magicList = [
  {
    priority: 40,
    matchList: [
      {
        type: 'string',
        value: 'Imports ',
        offset: '0',
        mask: null,
        matchList: [],
      },
      {
        type: 'string',
        value: '\\nImports ',
        offset: '0:256',
        mask: null,
        matchList: [],
      },
      {
        type: 'string',
        value: 'Module ',
        offset: '0',
        mask: null,
        matchList: [],
      },
      {
        type: 'string',
        value: '\\nModule ',
        offset: '0:256',
        mask: null,
        matchList: [],
      },
    ],
  },
];
export const treeMagicList = [];
export const rootXmlList = [];

/** About glob */
const glob0 = '*.vb';

export const globList = [
  {
    pattern: glob0,
    weight: null,
    caseSensitive: false,
  },
];

export const globPatternList = [glob0];
