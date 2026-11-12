/** The media type this record describes. */
export const mediaType = 'video/x-mng';

export const commentList = ['MNG animation'];
export const acronym = 'MNG';
export const expandedAcronym = 'Multiple-Image Network Graphics';
export const genericIconName = null;
export const aliasList = [];
export const subClassOfList = [];
export const magicList = [
  {
    priority: null,
    matchList: [
      {
        type: 'string',
        value: '\\x8AMNG\\x0D\\x0A\\x1A\\x0A',
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
const glob0 = '*.mng';

export const globList = [
  {
    pattern: glob0,
    weight: null,
    caseSensitive: false,
  },
];

export const globPatternList = [glob0];
