/** The media type this record describes. */
export const mediaType = 'application/vnd.ms-wpl';

export const commentList = ['WPL playlist'];
export const acronym = 'WPL';
export const expandedAcronym = 'Windows Media Player Playlist';
export const genericIconName = 'video-x-generic';
export const aliasList = [];
export const subClassOfList = [];
export const magicList = [
  {
    priority: 60,
    matchList: [
      {
        type: 'string',
        value: '<?wpl',
        offset: '0:256',
        mask: null,
        matchList: [],
      },
    ],
  },
];
export const treeMagicList = [];
export const rootXmlList = [];

/** About glob */
const glob0 = '*.wpl';

export const globList = [
  {
    pattern: glob0,
    weight: null,
    caseSensitive: false,
  },
];

export const globPatternList = [glob0];
