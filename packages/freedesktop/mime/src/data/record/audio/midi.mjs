/** The media type this record describes. */
export const mediaType = 'audio/midi';

export const commentList = ['MIDI audio'];
export const acronym = 'MIDI';
export const expandedAcronym = 'Musical Instrument Digital Interface';
export const genericIconName = null;
export const aliasList = ['audio/x-midi'];
export const subClassOfList = [];
export const globList = [
  {
    pattern: '*.mid',
    weight: null,
    caseSensitive: false,
  },
  {
    pattern: '*.midi',
    weight: null,
    caseSensitive: false,
  },
  {
    pattern: '*.kar',
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
