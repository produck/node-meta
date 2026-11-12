/** The media type this record describes. */
export const mediaType = 'text/x-tex';

export const commentList = ['TeX document'];
export const acronym = null;
export const expandedAcronym = null;
export const genericIconName = null;
export const aliasList = ['application/x-tex'];
export const subClassOfList = ['text/plain'];
export const magicList = [
  {
    priority: 10,
    matchList: [
      {
        type: 'string',
        value: '%',
        offset: '0',
        mask: null,
        matchList: [],
      },
    ],
  },
  {
    priority: null,
    matchList: [
      {
        type: 'string',
        value: 'documentclass',
        offset: '1',
        mask: null,
        matchList: [],
      },
    ],
  },
];
export const treeMagicList = [];
export const rootXmlList = [];

/** About glob */
const glob0 = '*.tex';
const glob1 = '*.ltx';
const glob2 = '*.sty';
const glob3 = '*.cls';
const glob4 = '*.dtx';
const glob5 = '*.ins';
const glob6 = '*.latex';

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
  {
    pattern: glob6,
    weight: null,
    caseSensitive: false,
  },
];

export const globPatternList = [
  glob0,
  glob1,
  glob2,
  glob3,
  glob4,
  glob5,
  glob6,
];
