/** The media type this record describes. */
export const mediaType = 'application/x-n64-rom';

export const commentList = ['Nintendo64 ROM'];
export const acronym = null;
export const expandedAcronym = null;
export const genericIconName = 'application-x-executable';
export const aliasList = [];
export const subClassOfList = [];
export const globList = [
  {
    pattern: '*.n64',
    weight: null,
    caseSensitive: false,
  },
  {
    pattern: '*.z64',
    weight: null,
    caseSensitive: false,
  },
  {
    pattern: '*.v64',
    weight: null,
    caseSensitive: false,
  },
];
export const magicList = [
  {
    priority: null,
    matchList: [
      {
        type: 'big32',
        value: '0x80371240',
        offset: '0',
        mask: null,
        matchList: [],
      },
      {
        type: 'big32',
        value: '0x37804012',
        offset: '0',
        mask: null,
        matchList: [],
      },
      {
        type: 'big32',
        value: '0x40123780',
        offset: '0',
        mask: null,
        matchList: [],
      },
    ],
  },
];
export const treeMagicList = [];
export const rootXmlList = [];
