/** The media type this record describes. */
export const mediaType = 'application/vnd.smaf';

export const commentList = ['SMAF audio'];
export const acronym = 'SMAF';
export const expandedAcronym = 'Synthetic music Mobile Application Format';
export const genericIconName = 'audio-x-generic';
export const aliasList = ['application/x-smaf'];
export const subClassOfList = [];
export const globList = [
  {
    pattern: '*.mmf',
    weight: null,
    caseSensitive: false,
  },
  {
    pattern: '*.smaf',
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
        value: 'MMMD',
        offset: '0',
        mask: null,
        matchList: [],
      },
    ],
  },
];
export const treeMagicList = [];
export const rootXmlList = [];
