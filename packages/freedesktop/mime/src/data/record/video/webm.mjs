/** The media type this record describes. */
export const mediaType = 'video/webm';

export const commentList = ['WebM video'];
export const acronym = null;
export const expandedAcronym = null;
export const genericIconName = null;
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
                value: 'webm',
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

/** About glob */
const glob0 = '*.webm';

export const globList = [
  {
    pattern: glob0,
    weight: null,
    caseSensitive: false,
  },
];

export const globPatternList = [glob0];
