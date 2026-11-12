/** The media type this record describes. */
export const mediaType = 'application/x-nzb';

export const commentList = ['NewzBin usenet index'];
export const acronym = null;
export const expandedAcronym = null;
export const genericIconName = null;
export const aliasList = [];
export const subClassOfList = ['application/xml'];
export const magicList = [
  {
    priority: 80,
    matchList: [
      {
        type: 'string',
        value: '<nzb',
        offset: '0:256',
        mask: null,
        matchList: [],
      },
    ],
  },
];
export const treeMagicList = [];
export const rootXmlList = [];

/** About glob */
const glob0 = '*.nzb';

export const globList = [
  {
    pattern: glob0,
    weight: null,
    caseSensitive: false,
  },
];

export const globPatternList = [glob0];
