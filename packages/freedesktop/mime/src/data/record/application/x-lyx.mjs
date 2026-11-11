/** The media type this record describes. */
export const mediaType = 'application/x-lyx';

export const commentList = ['LyX document'];
export const acronym = null;
export const expandedAcronym = null;
export const genericIconName = 'x-office-document';
export const aliasList = ['text/x-lyx'];
export const subClassOfList = ['text/plain'];
export const globList = [
  {
    pattern: '*.lyx',
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
        value: '#LyX',
        offset: '0',
        mask: null,
        matchList: [],
      },
    ],
  },
];
export const treeMagicList = [];
export const rootXmlList = [];
