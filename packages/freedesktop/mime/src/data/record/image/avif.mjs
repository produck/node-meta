/** The media type this record describes. */
export const mediaType = 'image/avif';

export const commentList = ['AVIF image'];
export const acronym = 'AVIF';
export const expandedAcronym = 'AV1 Image File Format';
export const genericIconName = null;
export const aliasList = ['image/avif-sequence'];
export const subClassOfList = [];
export const magicList = [
  {
    priority: null,
    matchList: [
      {
        type: 'string',
        value: 'ftypavif',
        offset: '4',
        mask: null,
        matchList: [],
      },
      {
        type: 'string',
        value: 'ftypavis',
        offset: '4',
        mask: null,
        matchList: [],
      },
      {
        type: 'string',
        value: 'ftypmif1',
        offset: '4',
        mask: null,
        matchList: [
          {
            type: 'string',
            value: 'avif',
            offset: '16',
            mask: null,
            matchList: [],
          },
          {
            type: 'string',
            value: 'avif',
            offset: '20',
            mask: null,
            matchList: [],
          },
          {
            type: 'string',
            value: 'avif',
            offset: '24',
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

/** About glob */
const glob0 = '*.avif';
const glob1 = '*.avifs';

export const globList = [
  {
    pattern: glob0,
    weight: null,
    caseSensitive: false,
  },
  {
    pattern: glob1,
    weight: null,
    caseSensitive: false,
  },
];

export const globPatternList = [glob0, glob1];
