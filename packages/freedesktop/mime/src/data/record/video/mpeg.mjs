/** The media type this record describes. */
export const mediaType = 'video/mpeg';

export const commentList = ['MPEG video'];
export const acronym = 'MPEG';
export const expandedAcronym = 'Moving Picture Experts Group';
export const genericIconName = null;
export const aliasList = [
  'video/x-mpeg',
  'video/mpeg-system',
  'video/x-mpeg-system',
  'video/x-mpeg2',
];
export const subClassOfList = [];
export const globList = [
  {
    pattern: '*.mpeg',
    weight: null,
    caseSensitive: false,
  },
  {
    pattern: '*.mpg',
    weight: null,
    caseSensitive: false,
  },
  {
    pattern: '*.mp2',
    weight: null,
    caseSensitive: false,
  },
  {
    pattern: '*.mpe',
    weight: null,
    caseSensitive: false,
  },
  {
    pattern: '*.vob',
    weight: null,
    caseSensitive: false,
  },
  {
    pattern: '[0-9][0-9][0-9].vdr',
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
        value: '\\x47\\x3f\\xff\\x10',
        offset: '0',
        mask: null,
        matchList: [],
      },
      {
        type: 'big32',
        value: '0x000001b3',
        offset: '0',
        mask: null,
        matchList: [],
      },
      {
        type: 'big32',
        value: '0x000001ba',
        offset: '0',
        mask: null,
        matchList: [],
      },
    ],
  },
];
export const treeMagicList = [];
export const rootXmlList = [];
