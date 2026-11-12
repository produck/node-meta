/** The media type this record describes. */
export const mediaType = 'text/x-qml';

export const commentList = ['Qt Markup Language file'];
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
        value: '/bin/env qml',
        offset: '2:16',
        mask: null,
        matchList: [],
      },
      {
        type: 'string',
        value: 'import Qt',
        offset: '0:3000',
        mask: null,
        matchList: [
          {
            type: 'string',
            value: '{',
            offset: '9:3009',
            mask: null,
            matchList: [],
          },
        ],
      },
      {
        type: 'string',
        value: 'import Qml',
        offset: '0:3000',
        mask: null,
        matchList: [
          {
            type: 'string',
            value: '{',
            offset: '9:3009',
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
const glob0 = '*.qml';
const glob1 = '*.qmltypes';
const glob2 = '*.qmlproject';

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
