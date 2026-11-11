/** The media type this record describes. */
export const mediaType = 'audio/x-mtm';

export const commentList = ['MultiTracker audio'];
export const acronym = null;
export const expandedAcronym = null;
export const genericIconName = null;
export const aliasList = ['audio/x-multitrack'];
export const subClassOfList = [];
export const globList = [
  {
    pattern: '*.mtm',
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
        value: 'MTM',
        offset: '0',
        mask: null,
        matchList: [],
      },
    ],
  },
];
export const treeMagicList = [];
export const rootXmlList = [];
