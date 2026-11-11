/** The media type this record describes. */
export const mediaType = 'audio/x-mod';

export const commentList = ['Amiga SoundTracker audio'];
export const acronym = null;
export const expandedAcronym = null;
export const genericIconName = null;
export const aliasList = [];
export const subClassOfList = [];
export const globList = [
  {
    pattern: '*.mod',
    weight: null,
    caseSensitive: false,
  },
  {
    pattern: '*.m15',
    weight: null,
    caseSensitive: false,
  },
  {
    pattern: '*.stk',
    weight: null,
    caseSensitive: false,
  },
  {
    pattern: '*.nst',
    weight: null,
    caseSensitive: false,
  },
  {
    pattern: '*.fst',
    weight: null,
    caseSensitive: false,
  },
];
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
