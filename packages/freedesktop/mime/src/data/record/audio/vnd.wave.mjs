/** The media type this record describes. */
export const mediaType = 'audio/vnd.wave';

export const commentList = ['WAV audio'];
export const acronym = null;
export const expandedAcronym = null;
export const genericIconName = null;
export const aliasList = ['audio/wav', 'audio/x-wav'];
export const subClassOfList = ['application/x-riff'];
export const magicList = [
  {
    priority: null,
    matchList: [
      {
        type: 'string',
        value: 'WAVE',
        offset: '8',
        mask: null,
        matchList: [],
      },
      {
        type: 'string',
        value: 'WAV ',
        offset: '8',
        mask: null,
        matchList: [],
      },
    ],
  },
];
export const treeMagicList = [];
export const rootXmlList = [];

/** About glob */
const glob0 = '*.wav';

export const globList = [
  {
    pattern: glob0,
    weight: null,
    caseSensitive: false,
  },
];

export const globPatternList = [glob0];
