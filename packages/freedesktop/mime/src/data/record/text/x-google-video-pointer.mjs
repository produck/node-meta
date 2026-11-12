/** The media type this record describes. */
export const mediaType = 'text/x-google-video-pointer';

export const commentList = ['Google Video Pointer shortcut'];
export const acronym = null;
export const expandedAcronym = null;
export const genericIconName = null;
export const aliasList = ['text/google-video-pointer'];
export const subClassOfList = ['text/plain'];
export const magicList = [
  {
    priority: null,
    matchList: [
      {
        type: 'string',
        value: '#.download.the.free.Google.Video.Player',
        offset: '0',
        mask: null,
        matchList: [],
      },
      {
        type: 'string',
        value: '# download the free Google Video Player',
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
const glob0 = '*.gvp';

export const globList = [
  {
    pattern: glob0,
    weight: null,
    caseSensitive: false,
  },
];

export const globPatternList = [glob0];
