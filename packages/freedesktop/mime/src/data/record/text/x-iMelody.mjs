/** The media type this record describes. */
export const mediaType = 'text/x-iMelody';

export const commentList = ['iMelody ringtone'];
export const acronym = null;
export const expandedAcronym = null;
export const genericIconName = null;
export const aliasList = ['audio/x-iMelody', 'audio/iMelody'];
export const subClassOfList = ['text/plain'];
export const globList = [
  {
    pattern: '*.imy',
    weight: null,
    caseSensitive: false,
  },
  {
    pattern: '*.ime',
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
        value: 'BEGIN:IMELODY',
        offset: '0',
        mask: null,
        matchList: [],
      },
    ],
  },
];
export const treeMagicList = [];
export const rootXmlList = [];
