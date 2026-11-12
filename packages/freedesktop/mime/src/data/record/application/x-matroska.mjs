/** The media type this record describes. */
export const mediaType = 'application/x-matroska';

export const commentList = ['Matroska stream'];
export const acronym = null;
export const expandedAcronym = null;
export const genericIconName = 'video-x-generic';
export const aliasList = [];
export const subClassOfList = [];
export const magicList = [
  {
    priority: null,
    matchList: [
      {
        type: 'big32',
        value: '0x1a45dfa3',
        offset: '0',
        mask: null,
        matchList: [
          {
            type: 'big16',
            value: '0x4282',
            offset: '5:65',
            mask: null,
            matchList: [
              {
                type: 'string',
                value: 'matroska',
                offset: '8:75',
                mask: null,
                matchList: [],
              },
            ],
          },
        ],
      },
    ],
  },
];
export const treeMagicList = [];
export const rootXmlList = [];

export const globList = [];

export const globPatternList = [];
