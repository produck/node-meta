/** The media type this record describes. */
export const mediaType = 'audio/x-aiff';

export const commentList = ['AIFF/Amiga/Mac audio'];
export const acronym = 'AIFF';
export const expandedAcronym = 'Audio Interchange File Format';
export const genericIconName = null;
export const aliasList = [];
export const subClassOfList = ['application/x-iff'];
export const magicList = [
  {
    priority: null,
    matchList: [
      {
        type: 'string',
        value: 'AIFF',
        offset: '8',
        mask: null,
        matchList: [],
      },
      {
        type: 'string',
        value: '8SVX',
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
const glob0 = '*.aiff';
const glob1 = '*.aif';

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
