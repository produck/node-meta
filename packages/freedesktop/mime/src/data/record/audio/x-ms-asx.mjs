/** The media type this record describes. */
export const mediaType = 'audio/x-ms-asx';

export const commentList = ['Microsoft ASX playlist'];
export const acronym = null;
export const expandedAcronym = null;
export const genericIconName = null;
export const aliasList = [
  'video/x-ms-wvx',
  'video/x-ms-wax',
  'video/x-ms-wmx',
  'application/x-ms-asx',
];
export const subClassOfList = [];
export const magicList = [
  {
    priority: 51,
    matchList: [
      {
        type: 'string',
        value: 'ASF ',
        offset: '0',
        mask: null,
        matchList: [],
      },
      {
        type: 'string',
        value: '<ASX',
        offset: '0:64',
        mask: null,
        matchList: [],
      },
      {
        type: 'string',
        value: '<asx',
        offset: '0:64',
        mask: null,
        matchList: [],
      },
      {
        type: 'string',
        value: '<Asx',
        offset: '0:64',
        mask: null,
        matchList: [],
      },
    ],
  },
];
export const treeMagicList = [];
export const rootXmlList = [];

/** About glob */
const glob0 = '*.asx';
const glob1 = '*.wax';
const glob2 = '*.wvx';
const glob3 = '*.wmx';

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
