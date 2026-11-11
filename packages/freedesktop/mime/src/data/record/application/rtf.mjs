/** The media type this record describes. */
export const mediaType = 'application/rtf';

export const commentList = ['RTF document'];
export const acronym = 'RTF';
export const expandedAcronym = 'Rich Text Format';
export const genericIconName = 'x-office-document';
export const aliasList = ['text/rtf'];
export const subClassOfList = ['text/plain'];
export const globList = [
  {
    pattern: '*.rtf',
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
        value: '{\\\\rtf',
        offset: '0',
        mask: null,
        matchList: [],
      },
    ],
  },
];
export const treeMagicList = [];
export const rootXmlList = [];
