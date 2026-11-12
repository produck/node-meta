/** The media type this record describes. */
export const mediaType = 'application/x-quicktime-media-link';

export const commentList = ['QuickTime playlist'];
export const acronym = null;
export const expandedAcronym = null;
export const genericIconName = 'video-x-generic';
export const aliasList = ['application/x-quicktimeplayer'];
export const subClassOfList = ['video/quicktime'];
export const magicList = [
  {
    priority: 60,
    matchList: [
      {
        type: 'string',
        value: '<?xml',
        offset: '0',
        mask: null,
        matchList: [
          {
            type: 'string',
            value: '<?quicktime',
            offset: '0:64',
            mask: null,
            matchList: [],
          },
        ],
      },
      {
        type: 'string',
        value: 'RTSPtext',
        offset: '0',
        mask: null,
        matchList: [],
      },
      {
        type: 'string',
        value: 'rtsptext',
        offset: '0',
        mask: null,
        matchList: [],
      },
      {
        type: 'string',
        value: 'SMILtext',
        offset: '0',
        mask: null,
        matchList: [],
      },
    ],
  },
];
export const treeMagicList = [];
export const rootXmlList = [];

/** About glob */
const glob0 = '*.qtl';

export const globList = [
  {
    pattern: glob0,
    weight: null,
    caseSensitive: false,
  },
];

export const globPatternList = [glob0];
