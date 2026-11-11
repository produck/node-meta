/** The media type this record describes. */
export const mediaType = 'audio/x-tta';

export const commentList = ['TrueAudio audio'];
export const acronym = null;
export const expandedAcronym = null;
export const genericIconName = null;
export const aliasList = ['audio/tta'];
export const subClassOfList = [];
export const globList = [
  {
    pattern: '*.tta',
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
        value: 'TTA1',
        offset: '0',
        mask: null,
        matchList: [],
      },
    ],
  },
];
export const treeMagicList = [];
export const rootXmlList = [];
