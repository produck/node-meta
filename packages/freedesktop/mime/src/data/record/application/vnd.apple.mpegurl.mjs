/** The media type this record describes. */
export const mediaType = 'application/vnd.apple.mpegurl';

export const commentList = ['Media playlist'];
export const acronym = null;
export const expandedAcronym = null;
export const genericIconName = null;
export const aliasList = [];
export const subClassOfList = ['text/plain'];
export const magicList = [
  {
    priority: 70,
    matchList: [
      {
        type: 'string',
        value: '#EXTM3U',
        offset: '0',
        mask: null,
        matchList: [
          {
            type: 'string',
            value: '#EXT-X-TARGETDURATION',
            offset: '0:128',
            mask: null,
            matchList: [],
          },
          {
            type: 'string',
            value: '#EXT-X-STREAM-INF',
            offset: '0:128',
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
const glob0 = '*.m3u';
const glob1 = '*.m3u8';

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
