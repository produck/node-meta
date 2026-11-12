/** The media type this record describes. */
export const mediaType = 'audio/flac';

export const commentList = ['FLAC audio'];
export const acronym = 'FLAC';
export const expandedAcronym = 'Free Lossless Audio Codec';
export const genericIconName = null;
export const aliasList = ['audio/x-flac'];
export const subClassOfList = [];
export const magicList = [
  {
    priority: null,
    matchList: [
      {
        type: 'string',
        value: 'fLaC',
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
const glob0 = '*.flac';

export const globList = [
  {
    pattern: glob0,
    weight: null,
    caseSensitive: false,
  },
];

export const globPatternList = [glob0];
