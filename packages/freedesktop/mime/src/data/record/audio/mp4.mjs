/** The media type this record describes. */
export const mediaType = 'audio/mp4';

export const commentList = ['MPEG-4 audio'];
export const acronym = null;
export const expandedAcronym = null;
export const genericIconName = null;
export const aliasList = ['audio/x-m4a', 'audio/m4a'];
export const subClassOfList = [];
export const magicList = [
  {
    priority: null,
    matchList: [
      {
        type: 'string',
        value: 'ftypM4A',
        offset: '4',
        mask: null,
        matchList: [],
      },
    ],
  },
];
export const treeMagicList = [];
export const rootXmlList = [];

/** About glob */
const glob0 = '*.m4a';
const glob1 = '*.f4a';

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
