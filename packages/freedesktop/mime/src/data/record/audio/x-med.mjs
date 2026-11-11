/** The media type this record describes. */
export const mediaType = 'audio/x-med';

export const commentList = ['OctaMED audio'];
export const acronym = null;
export const expandedAcronym = null;
export const genericIconName = null;
export const aliasList = [];
export const subClassOfList = [];
export const globList = [
  {
    pattern: '*.med',
    weight: null,
    caseSensitive: false,
  },
];
export const magicList = [
  {
    priority: 40,
    matchList: [
      {
        type: 'string',
        value: 'MMD0',
        offset: '0',
        mask: null,
        matchList: [],
      },
      {
        type: 'string',
        value: 'MMD1',
        offset: '0',
        mask: null,
        matchList: [],
      },
      {
        type: 'string',
        value: 'MMD2',
        offset: '0',
        mask: null,
        matchList: [],
      },
      {
        type: 'string',
        value: 'MMD3',
        offset: '0',
        mask: null,
        matchList: [],
      },
    ],
  },
];
export const treeMagicList = [];
export const rootXmlList = [];
