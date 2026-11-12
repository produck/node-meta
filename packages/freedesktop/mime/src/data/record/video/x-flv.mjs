/** The media type this record describes. */
export const mediaType = 'video/x-flv';

export const commentList = ['Flash video'];
export const acronym = null;
export const expandedAcronym = null;
export const genericIconName = null;
export const aliasList = [
  'application/x-flash-video',
  'flv-application/octet-stream',
  'video/flv',
];
export const subClassOfList = [];
export const magicList = [
  {
    priority: null,
    matchList: [
      {
        type: 'string',
        value: 'FLV',
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
const glob0 = '*.flv';

export const globList = [
  {
    pattern: glob0,
    weight: null,
    caseSensitive: false,
  },
];

export const globPatternList = [glob0];
