/** The media type this record describes. */
export const mediaType = 'application/x-cdf';

export const commentList = ['Audio CD track information'];
export const acronym = 'CD';
export const expandedAcronym = 'Compact Disc';
export const genericIconName = 'audio-x-generic';
export const aliasList = ['application/x-cda', 'audio/x-cda'];
export const subClassOfList = ['application/x-riff'];
export const magicList = [
  {
    priority: null,
    matchList: [
      {
        type: 'string',
        value: 'RIFF$\\0\\0\\0CDDAfmt ',
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
const glob0 = '*.cda';

export const globList = [
  {
    pattern: glob0,
    weight: null,
    caseSensitive: false,
  },
];

export const globPatternList = [glob0];
