/** The media type this record describes. */
export const mediaType = 'text/x-qml';

export const commentList = ['Qt Markup Language file'];
export const acronym = null;
export const expandedAcronym = null;
export const genericIconName = null;
export const aliasList = [];
export const subClassOfList = ['text/plain'];
export const globList = [
  {
    pattern: '*.qml',
    weight: null,
    caseSensitive: false,
  },
  {
    pattern: '*.qmltypes',
    weight: null,
    caseSensitive: false,
  },
  {
    pattern: '*.qmlproject',
    weight: null,
    caseSensitive: false,
  },
];
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
