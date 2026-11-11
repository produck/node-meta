/** The media type this record describes. */
export const mediaType = 'application/x-ms-wim';

export const commentList = ['WIM disk image'];
export const acronym = 'WIM';
export const expandedAcronym = 'Windows Imaging Format';
export const genericIconName = null;
export const aliasList = [];
export const subClassOfList = [];
export const globList = [
  {
    pattern: '*.wim',
    weight: null,
    caseSensitive: false,
  },
  {
    pattern: '*.swm',
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
        value: 'MSWIM\\000\\000\\000',
        offset: '0',
        mask: null,
        matchList: [],
      },
    ],
  },
];
export const treeMagicList = [];
export const rootXmlList = [];
