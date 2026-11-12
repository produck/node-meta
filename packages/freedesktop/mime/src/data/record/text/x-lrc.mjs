/** The media type this record describes. */
export const mediaType = 'text/x-lrc';

export const commentList = ['Song lyrics'];
export const acronym = null;
export const expandedAcronym = null;
export const genericIconName = null;
export const aliasList = [];
export const subClassOfList = ['text/plain'];
export const magicList = [
  {
    priority: null,
    matchList: [
      {
        type: 'string',
        value: '[00:00.00]',
        offset: '0:256',
        mask: '0xff3030ff3030ff3030ff',
        matchList: [],
      },
      {
        type: 'string',
        value: '[00:00.000]',
        offset: '0:256',
        mask: '0xff3030ff3030ff303030ff',
        matchList: [],
      },
      {
        type: 'string',
        value: '[au: instrumental]',
        offset: '0:256',
        mask: null,
        matchList: [],
      },
      {
        type: 'string',
        value: '[au:instrumental]',
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
const glob0 = '*.lrc';

export const globList = [
  {
    pattern: glob0,
    weight: null,
    caseSensitive: false,
  },
];

export const globPatternList = [glob0];
