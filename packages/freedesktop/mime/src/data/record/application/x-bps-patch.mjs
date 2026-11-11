/** The media type this record describes. */
export const mediaType = 'application/x-bps-patch';

export const commentList = ['BPS patch'];
export const acronym = 'BPS';
export const expandedAcronym = 'Binary Patching System';
export const genericIconName = null;
export const aliasList = [];
export const subClassOfList = [];
export const globList = [
  {
    pattern: '*.bps',
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
        value: 'BPS1',
        offset: '0',
        mask: null,
        matchList: [],
      },
    ],
  },
];
export const treeMagicList = [];
export const rootXmlList = [];
