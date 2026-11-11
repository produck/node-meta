/** The media type this record describes. */
export const mediaType = 'application/x-subrip';

export const commentList = ['SubRip subtitles'];
export const acronym = null;
export const expandedAcronym = null;
export const genericIconName = 'text-x-generic';
export const aliasList = ['application/x-srt'];
export const subClassOfList = ['text/plain'];
export const globList = [
  {
    pattern: '*.srt',
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
        value: '1',
        offset: '0',
        mask: null,
        matchList: [
          {
            type: 'string',
            value: ' --> ',
            offset: '0:256',
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
