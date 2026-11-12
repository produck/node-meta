/** The media type this record describes. */
export const mediaType = 'text/x-go-mod';

export const commentList = ['Go module file'];
export const acronym = null;
export const expandedAcronym = null;
export const genericIconName = null;
export const aliasList = [];
export const subClassOfList = ['text/plain'];
export const magicList = [
  {
    priority: 30,
    matchList: [
      {
        type: 'string',
        value: 'module ',
        offset: '0',
        mask: null,
        matchList: [
          {
            type: 'string',
            value: '\\ngo 1.',
            offset: '8:256',
            mask: null,
            matchList: [],
          },
          {
            type: 'string',
            value: '\\ngo 2.',
            offset: '8:256',
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
const glob0 = 'go.mod';

export const globList = [
  {
    pattern: glob0,
    weight: null,
    caseSensitive: false,
  },
];

export const globPatternList = [glob0];
