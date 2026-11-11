/** The media type this record describes. */
export const mediaType = 'audio/x-ult';

export const commentList = ['UltraTracker audio'];
export const acronym = null;
export const expandedAcronym = null;
export const genericIconName = null;
export const aliasList = ['audio/x-multimate-mod'];
export const subClassOfList = [];
export const globList = [
  {
    pattern: '*.ult',
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
        value: 'MAS_UTrack_V00',
        offset: '0',
        mask: null,
        matchList: [],
      },
    ],
  },
];
export const treeMagicList = [];
export const rootXmlList = [];
