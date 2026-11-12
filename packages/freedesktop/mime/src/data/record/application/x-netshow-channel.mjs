/** The media type this record describes. */
export const mediaType = 'application/x-netshow-channel';

export const commentList = ['Windows Media Station file'];
export const acronym = null;
export const expandedAcronym = null;
export const genericIconName = 'video-x-generic';
export const aliasList = [];
export const subClassOfList = ['application/vnd.ms-asf'];
export const magicList = [
  {
    priority: null,
    matchList: [
      {
        type: 'string',
        value: '[Address]',
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
const glob0 = '*.nsc';

export const globList = [
  {
    pattern: glob0,
    weight: null,
    caseSensitive: false,
  },
];

export const globPatternList = [glob0];
