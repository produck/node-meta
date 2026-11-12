/** The media type this record describes. */
export const mediaType = 'text/x-patch';

export const commentList = ['Differences between files'];
export const acronym = null;
export const expandedAcronym = null;
export const genericIconName = null;
export const aliasList = ['text/x-diff'];
export const subClassOfList = ['text/plain'];
export const magicList = [
  {
    priority: null,
    matchList: [
      {
        type: 'string',
        value: 'diff\\t',
        offset: '0',
        mask: null,
        matchList: [],
      },
      {
        type: 'string',
        value: 'diff ',
        offset: '0',
        mask: null,
        matchList: [],
      },
      {
        type: 'string',
        value: '***\\t',
        offset: '0',
        mask: null,
        matchList: [],
      },
      {
        type: 'string',
        value: '*** ',
        offset: '0',
        mask: null,
        matchList: [],
      },
      {
        type: 'string',
        value: '=== ',
        offset: '0',
        mask: null,
        matchList: [],
      },
      {
        type: 'string',
        value: '--- ',
        offset: '0',
        mask: null,
        matchList: [],
      },
      {
        type: 'string',
        value: 'Only in\\t',
        offset: '0',
        mask: null,
        matchList: [],
      },
      {
        type: 'string',
        value: 'Only in ',
        offset: '0',
        mask: null,
        matchList: [],
      },
      {
        type: 'string',
        value: 'Common subdirectories: ',
        offset: '0',
        mask: null,
        matchList: [],
      },
      {
        type: 'string',
        value: 'Index:',
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
const glob0 = '*.diff';
const glob1 = '*.patch';

export const globList = [
  {
    pattern: glob0,
    weight: null,
    caseSensitive: false,
  },
  {
    pattern: glob1,
    weight: null,
    caseSensitive: false,
  },
];

export const globPatternList = [glob0, glob1];
