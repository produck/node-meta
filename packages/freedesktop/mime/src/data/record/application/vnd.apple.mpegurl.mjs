/** The media type this record describes. */
export const mediaType = 'application/vnd.apple.mpegurl';

export const commentList = ['Media playlist'];
export const acronym = null;
export const expandedAcronym = null;
export const genericIconName = null;
export const aliasList = [];
export const subClassOfList = ['text/plain'];
export const globList = [
  {
    pattern: '*.m3u',
    weight: null,
    caseSensitive: false,
  },
  {
    pattern: '*.m3u8',
    weight: null,
    caseSensitive: false,
  },
];
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
