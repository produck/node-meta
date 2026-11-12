/** The media type this record describes. */
export const mediaType = 'audio/x-mod';

export const commentList = ['Amiga SoundTracker audio'];
export const acronym = null;
export const expandedAcronym = null;
export const genericIconName = null;
export const aliasList = [];
export const subClassOfList = [];
export const magicList = [
  {
    priority: 40,
    matchList: [
      {
        type: 'string',
        value: 'M.K.',
        offset: '1080',
        mask: null,
        matchList: [],
      },
      {
        type: 'string',
        value: 'M!K!',
        offset: '1080',
        mask: null,
        matchList: [],
      },
      {
        type: 'string',
        value: 'N.T.',
        offset: '1080',
        mask: null,
        matchList: [],
      },
      {
        type: 'string',
        value: 'FLT4',
        offset: '1080',
        mask: null,
        matchList: [],
      },
      {
        type: 'string',
        value: 'FLT8',
        offset: '1080',
        mask: null,
        matchList: [],
      },
      {
        type: 'string',
        value: 'CHN',
        offset: '1081',
        mask: null,
        matchList: [],
      },
      {
        type: 'string',
        value: 'CH',
        offset: '1082',
        mask: null,
        matchList: [],
      },
      {
        type: 'string',
        value: 'CN',
        offset: '1083',
        mask: null,
        matchList: [],
      },
    ],
  },
];
export const treeMagicList = [];
export const rootXmlList = [];

/** About glob */
const glob0 = '*.mod';
const glob1 = '*.m15';
const glob2 = '*.stk';
const glob3 = '*.nst';
const glob4 = '*.fst';

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
  {
    pattern: glob3,
    weight: null,
    caseSensitive: false,
  },
  {
    pattern: glob4,
    weight: null,
    caseSensitive: false,
  },
];

export const globPatternList = [glob0, glob1, glob2, glob3, glob4];
