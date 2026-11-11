/** The media type this record describes. */
export const mediaType = 'video/mp4';

export const commentList = ['MPEG-4 video'];
export const acronym = null;
export const expandedAcronym = null;
export const genericIconName = null;
export const aliasList = ['video/mp4v-es', 'video/x-m4v'];
export const subClassOfList = [];
export const globList = [
  {
    pattern: '*.mp4',
    weight: null,
    caseSensitive: false,
  },
  {
    pattern: '*.m4v',
    weight: null,
    caseSensitive: false,
  },
  {
    pattern: '*.f4v',
    weight: null,
    caseSensitive: false,
  },
  {
    pattern: '*.lrv',
    weight: null,
    caseSensitive: false,
  },
  {
    pattern: '*.lrf',
    weight: 60,
    caseSensitive: false,
  },
];
export const magicList = [
  {
    priority: null,
    matchList: [
      {
        type: 'string',
        value: 'ftypisom',
        offset: '4',
        mask: null,
        matchList: [],
      },
      {
        type: 'string',
        value: 'ftypiso2',
        offset: '4',
        mask: null,
        matchList: [],
      },
      {
        type: 'string',
        value: 'ftypiso3',
        offset: '4',
        mask: null,
        matchList: [],
      },
      {
        type: 'string',
        value: 'ftypiso4',
        offset: '4',
        mask: null,
        matchList: [],
      },
      {
        type: 'string',
        value: 'ftypiso5',
        offset: '4',
        mask: null,
        matchList: [],
      },
      {
        type: 'string',
        value: 'ftypiso6',
        offset: '4',
        mask: null,
        matchList: [],
      },
      {
        type: 'string',
        value: 'ftypmp41',
        offset: '4',
        mask: null,
        matchList: [],
      },
      {
        type: 'string',
        value: 'ftypmp42',
        offset: '4',
        mask: null,
        matchList: [],
      },
      {
        type: 'string',
        value: 'ftypMSNV',
        offset: '4',
        mask: null,
        matchList: [],
      },
      {
        type: 'string',
        value: 'ftypM4V ',
        offset: '4',
        mask: null,
        matchList: [],
      },
      {
        type: 'string',
        value: 'ftypf4v ',
        offset: '4',
        mask: null,
        matchList: [],
      },
    ],
  },
];
export const treeMagicList = [];
export const rootXmlList = [];
