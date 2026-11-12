/** The media type this record describes. */
export const mediaType = 'video/quicktime';

export const commentList = ['QuickTime video'];
export const acronym = null;
export const expandedAcronym = null;
export const genericIconName = null;
export const aliasList = [];
export const subClassOfList = [];
export const magicList = [
  {
    priority: null,
    matchList: [
      {
        type: 'string',
        value: 'mdat',
        offset: '12',
        mask: null,
        matchList: [],
      },
      {
        type: 'string',
        value: 'mdat',
        offset: '4',
        mask: null,
        matchList: [],
      },
      {
        type: 'string',
        value: 'moov',
        offset: '4',
        mask: null,
        matchList: [],
      },
      {
        type: 'string',
        value: 'ftypqt',
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
const glob0 = '*.qt';
const glob1 = '*.mov';
const glob2 = '*.moov';
const glob3 = '*.qtvr';

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
];

export const globPatternList = [glob0, glob1, glob2, glob3];
