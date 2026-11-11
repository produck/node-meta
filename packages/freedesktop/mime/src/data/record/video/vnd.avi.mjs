/** The media type this record describes. */
export const mediaType = 'video/vnd.avi';

export const commentList = ['AVI video'];
export const acronym = 'AVI';
export const expandedAcronym = 'Audio Video Interleave';
export const genericIconName = null;
export const aliasList = [
  'video/x-avi',
  'video/avi',
  'video/divx',
  'video/msvideo',
  'video/vnd.divx',
  'video/x-msvideo',
];
export const subClassOfList = [];
export const globList = [
  {
    pattern: '*.avi',
    weight: null,
    caseSensitive: false,
  },
  {
    pattern: '*.avf',
    weight: null,
    caseSensitive: false,
  },
  {
    pattern: '*.divx',
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
        value: 'RIFF',
        offset: '0',
        mask: null,
        matchList: [
          {
            type: 'string',
            value: 'AVI ',
            offset: '8',
            mask: null,
            matchList: [],
          },
        ],
      },
      {
        type: 'string',
        value: 'AVF0',
        offset: '0',
        mask: null,
        matchList: [
          {
            type: 'string',
            value: 'AVI ',
            offset: '8',
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
