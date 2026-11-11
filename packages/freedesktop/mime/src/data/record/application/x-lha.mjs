/** The media type this record describes. */
export const mediaType = 'application/x-lha';

export const commentList = ['LHA archive'];
export const acronym = null;
export const expandedAcronym = null;
export const genericIconName = 'package-x-generic';
export const aliasList = ['application/x-lzh-compressed'];
export const subClassOfList = [];
export const globList = [
  {
    pattern: '*.lha',
    weight: null,
    caseSensitive: false,
  },
  {
    pattern: '*.lzh',
    weight: null,
    caseSensitive: false,
  },
];
export const magicList = [
  {
    priority: 60,
    matchList: [
      {
        type: 'string',
        value: '-lh -',
        offset: '2',
        mask: null,
        matchList: [],
      },
      {
        type: 'string',
        value: '-lh0-',
        offset: '2',
        mask: null,
        matchList: [],
      },
      {
        type: 'string',
        value: '-lh1-',
        offset: '2',
        mask: null,
        matchList: [],
      },
      {
        type: 'string',
        value: '-lh2-',
        offset: '2',
        mask: null,
        matchList: [],
      },
      {
        type: 'string',
        value: '-lh3-',
        offset: '2',
        mask: null,
        matchList: [],
      },
      {
        type: 'string',
        value: '-lh4-',
        offset: '2',
        mask: null,
        matchList: [],
      },
      {
        type: 'string',
        value: '-lh5-',
        offset: '2',
        mask: null,
        matchList: [],
      },
      {
        type: 'string',
        value: '-lh40-',
        offset: '2',
        mask: null,
        matchList: [],
      },
      {
        type: 'string',
        value: '-lhd-',
        offset: '2',
        mask: null,
        matchList: [],
      },
      {
        type: 'string',
        value: '-lz4-',
        offset: '2',
        mask: null,
        matchList: [],
      },
      {
        type: 'string',
        value: '-lz5-',
        offset: '2',
        mask: null,
        matchList: [],
      },
      {
        type: 'string',
        value: '-lzs-',
        offset: '2',
        mask: null,
        matchList: [],
      },
    ],
  },
];
export const treeMagicList = [];
export const rootXmlList = [];
