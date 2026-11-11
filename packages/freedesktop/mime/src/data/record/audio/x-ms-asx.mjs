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
export const globList = [
  {
    pattern: '*.asx',
    weight: null,
    caseSensitive: false,
  },
  {
    pattern: '*.wax',
    weight: null,
    caseSensitive: false,
  },
  {
    pattern: '*.wvx',
    weight: null,
    caseSensitive: false,
  },
  {
    pattern: '*.wmx',
    weight: null,
    caseSensitive: false,
  },
];
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
