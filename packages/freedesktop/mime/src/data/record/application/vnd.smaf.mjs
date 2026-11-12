/** The media type this record describes. */
export const mediaType = 'application/vnd.smaf';

export const commentList = ['SMAF audio'];
export const acronym = 'SMAF';
export const expandedAcronym = 'Synthetic music Mobile Application Format';
export const genericIconName = 'audio-x-generic';
export const aliasList = ['application/x-smaf'];
export const subClassOfList = [];
export const magicList = [
  {
    priority: null,
    matchList: [
      {
        type: 'string',
        value: 'MMMD',
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
const glob0 = '*.mmf';
const glob1 = '*.smaf';

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
];

export const globPatternList = [glob0, glob1];
