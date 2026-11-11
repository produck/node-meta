/** The media type this record describes. */
export const mediaType = 'audio/x-musepack';

export const commentList = ['Musepack audio'];
export const acronym = null;
export const expandedAcronym = null;
export const genericIconName = null;
export const aliasList = [];
export const subClassOfList = [];
export const globList = [
  {
    pattern: '*.mpc',
    weight: null,
    caseSensitive: false,
  },
  {
    pattern: '*.mpp',
    weight: null,
    caseSensitive: false,
  },
  {
    pattern: '*.mp+',
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
        value: 'MP+',
        offset: '0',
        mask: null,
        matchList: [],
      },
      {
        type: 'string',
        value: 'MPCK',
        offset: '0',
        mask: null,
        matchList: [],
      },
    ],
  },
];
export const treeMagicList = [];
export const rootXmlList = [];
