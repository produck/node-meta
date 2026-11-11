/** The media type this record describes. */
export const mediaType = 'audio/x-stm';

export const commentList = ['Scream Tracker audio'];
export const acronym = null;
export const expandedAcronym = null;
export const genericIconName = null;
export const aliasList = [];
export const subClassOfList = [];
export const globList = [
  {
    pattern: '*.stm',
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
        value: '!Scream!\\x1A',
        offset: '20',
        mask: null,
        matchList: [],
      },
      {
        type: 'string',
        value: '!SCREAM!\\x1A',
        offset: '20',
        mask: null,
        matchList: [],
      },
      {
        type: 'string',
        value: 'BMOD2STM\\x1A',
        offset: '20',
        mask: null,
        matchList: [],
      },
    ],
  },
];
export const treeMagicList = [];
export const rootXmlList = [];
