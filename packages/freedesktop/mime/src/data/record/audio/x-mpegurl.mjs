/** The media type this record describes. */
export const mediaType = 'audio/x-mpegurl';

export const commentList = ['Media playlist'];
export const acronym = null;
export const expandedAcronym = null;
export const genericIconName = null;
export const aliasList = [
  'audio/mpegurl',
  'application/m3u',
  'audio/x-mp3-playlist',
  'audio/m3u',
  'audio/x-m3u',
];
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
  {
    pattern: '*.vlc',
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
        value: '#EXTM3U',
        offset: '0',
        mask: null,
        matchList: [],
      },
    ],
  },
];
export const treeMagicList = [];
export const rootXmlList = [];
