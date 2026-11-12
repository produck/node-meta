/** The media type this record describes. */
export const mediaType = 'audio/aac';

export const commentList = ['AAC audio'];
export const acronym = 'AAC';
export const expandedAcronym = 'Advanced Audio Coding';
export const genericIconName = null;
export const aliasList = ['audio/x-aac'];
export const subClassOfList = [];
export const magicList = [
  {
    priority: null,
    matchList: [
      {
        type: 'string',
        value: 'ADIF',
        offset: '0',
        mask: null,
        matchList: [],
      },
      {
        type: 'big16',
        value: '0xFFF0',
        offset: '0',
        mask: '0xFFF6',
        matchList: [],
      },
    ],
  },
];
export const treeMagicList = [];
export const rootXmlList = [];

/** About glob */
const glob0 = '*.aac';
const glob1 = '*.adts';
const glob2 = '*.ass';

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
    weight: 10,
    caseSensitive: false,
  },
];

export const globPatternList = [glob0, glob1, glob2];
