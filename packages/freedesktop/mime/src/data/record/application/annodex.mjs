/** The media type this record describes. */
export const mediaType = 'application/annodex';

export const commentList = ['Annodex exchange format'];
export const acronym = null;
export const expandedAcronym = null;
export const genericIconName = 'video-x-generic';
export const aliasList = ['application/x-annodex'];
export const subClassOfList = [];
export const magicList = [
  {
    priority: null,
    matchList: [
      {
        type: 'string',
        value: 'OggS',
        offset: '0',
        mask: null,
        matchList: [
          {
            type: 'string',
            value: 'fishead\\0',
            offset: '28',
            mask: null,
            matchList: [
              {
                type: 'string',
                value: 'CMML\\0\\0\\0\\0',
                offset: '56:512',
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

/** About glob */
const glob0 = '*.anx';

export const globList = [
  {
    pattern: glob0,
    weight: null,
    caseSensitive: false,
  },
];

export const globPatternList = [glob0];
