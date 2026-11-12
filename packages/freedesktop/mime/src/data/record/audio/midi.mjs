/** The media type this record describes. */
export const mediaType = 'audio/midi';

export const commentList = ['MIDI audio'];
export const acronym = 'MIDI';
export const expandedAcronym = 'Musical Instrument Digital Interface';
export const genericIconName = null;
export const aliasList = ['audio/x-midi'];
export const subClassOfList = [];
export const magicList = [
  {
    priority: null,
    matchList: [
      {
        type: 'string',
        value: 'MThd',
        offset: '0',
        mask: null,
        matchList: [],
      },
    ],
  },
];
export const treeMagicList = [];
export const rootXmlList = [];

/** About glob */
const glob0 = '*.mid';
const glob1 = '*.midi';
const glob2 = '*.kar';

export const globList = [
  {
    pattern: glob0,
    weight: null,
    caseSensitive: false,
  },
  {
    pattern: glob1,
    weight: null,
    caseSensitive: false,
  },
  {
    pattern: glob2,
    weight: null,
    caseSensitive: false,
  },
];

export const globPatternList = [glob0, glob1, glob2];
