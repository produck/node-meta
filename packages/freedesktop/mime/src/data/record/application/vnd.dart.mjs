/** The media type this record describes. */
export const mediaType = 'application/vnd.dart';

export const commentList = ['Dart source code'];
export const acronym = null;
export const expandedAcronym = null;
export const genericIconName = null;
export const aliasList = ['text/x-dart'];
export const subClassOfList = ['text/plain'];
export const globList = [
  {
    pattern: '*.dart',
    weight: null,
    caseSensitive: false,
  },
];
export const magicList = [
  {
    priority: 10,
    matchList: [
      {
        type: 'string',
        value: '/*',
        offset: '0',
        mask: null,
        matchList: [],
      },
      {
        type: 'string',
        value: '//',
        offset: '0',
        mask: null,
        matchList: [],
      },
      {
        type: 'string',
        value: 'class',
        offset: '0',
        mask: null,
        matchList: [],
      },
      {
        type: 'string',
        value: 'import',
        offset: '0',
        mask: null,
        matchList: [],
      },
    ],
  },
];
export const treeMagicList = [];
export const rootXmlList = [];
