/** The media type this record describes. */
export const mediaType = 'video/vnd.avi';

export const commentList = ['AVI video'];
export const acronym = 'AVI';
export const expandedAcronym = 'Audio Video Interleave';
export const genericIconName = null;
export const aliasList = [
  'video/x-avi',
  'video/avi',
  'video/divx',
  'video/msvideo',
  'video/vnd.divx',
  'video/x-msvideo',
];
export const subClassOfList = [];
export const magicList = [
  {
    priority: null,
    matchList: [
      {
        type: 'string',
        value: 'RIFF',
        offset: '0',
        mask: null,
        matchList: [
          {
            type: 'string',
            value: 'AVI ',
            offset: '8',
            mask: null,
            matchList: [],
          },
        ],
      },
      {
        type: 'string',
        value: 'AVF0',
        offset: '0',
        mask: null,
        matchList: [
          {
            type: 'string',
            value: 'AVI ',
            offset: '8',
            mask: null,
            matchList: [],
          },
        ],
      },
    ],
  },
];
export const treeMagicList = [];
export const rootXmlList = [];

/** About glob */
const glob0 = '*.avi';
const glob1 = '*.avf';
const glob2 = '*.divx';

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
];

export const globPatternList = [glob0, glob1, glob2];
