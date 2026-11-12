/** The media type this record describes. */
export const mediaType = 'video/mpeg';

export const commentList = ['MPEG video'];
export const acronym = 'MPEG';
export const expandedAcronym = 'Moving Picture Experts Group';
export const genericIconName = null;
export const aliasList = [
  'video/x-mpeg',
  'video/mpeg-system',
  'video/x-mpeg-system',
  'video/x-mpeg2',
];
export const subClassOfList = [];
export const magicList = [
  {
    priority: null,
    matchList: [
      {
        type: 'string',
        value: '\\x47\\x3f\\xff\\x10',
        offset: '0',
        mask: null,
        matchList: [],
      },
      {
        type: 'big32',
        value: '0x000001b3',
        offset: '0',
        mask: null,
        matchList: [],
      },
      {
        type: 'big32',
        value: '0x000001ba',
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
const glob0 = '*.mpeg';
const glob1 = '*.mpg';
const glob2 = '*.mp2';
const glob3 = '*.mpe';
const glob4 = '*.vob';
const glob5 = '[0-9][0-9][0-9].vdr';

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
  {
    pattern: glob5,
    weight: null,
    caseSensitive: false,
  },
];

export const globPatternList = [glob0, glob1, glob2, glob3, glob4, glob5];
