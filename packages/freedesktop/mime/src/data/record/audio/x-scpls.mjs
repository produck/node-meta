/** The media type this record describes. */
export const mediaType = 'audio/x-scpls';

export const commentList = ['MP3 ShoutCast playlist'];
export const acronym = null;
export const expandedAcronym = null;
export const genericIconName = null;
export const aliasList = ['application/pls', 'audio/scpls'];
export const subClassOfList = [];
export const globList = [
  {
    pattern: '*.pls',
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
        value: '[playlist]',
        offset: '0',
        mask: null,
        matchList: [],
      },
      {
        type: 'string',
        value: '[Playlist]',
        offset: '0',
        mask: null,
        matchList: [],
      },
      {
        type: 'string',
        value: '[PLAYLIST]',
        offset: '0',
        mask: null,
        matchList: [],
      },
    ],
  },
];
export const treeMagicList = [];
export const rootXmlList = [];
