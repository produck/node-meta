/** The media type this record describes. */
export const mediaType = 'text/x-patch';

export const commentList = ['Differences between files'];
export const acronym = null;
export const expandedAcronym = null;
export const genericIconName = null;
export const aliasList = ['text/x-diff'];
export const subClassOfList = ['text/plain'];
export const globList = [
  {
    pattern: '*.diff',
    weight: null,
    caseSensitive: false,
  },
  {
    pattern: '*.patch',
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
