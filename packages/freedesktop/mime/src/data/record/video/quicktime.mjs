/** The media type this record describes. */
export const mediaType = 'video/quicktime';

export const commentList = ['QuickTime video'];
export const acronym = null;
export const expandedAcronym = null;
export const genericIconName = null;
export const aliasList = [];
export const subClassOfList = [];
export const globList = [
  {
    pattern: '*.qt',
    weight: null,
    caseSensitive: false,
  },
  {
    pattern: '*.mov',
    weight: null,
    caseSensitive: false,
  },
  {
    pattern: '*.moov',
    weight: null,
    caseSensitive: false,
  },
  {
    pattern: '*.qtvr',
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
