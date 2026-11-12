/** The media type this record describes. */
export const mediaType = 'application/rtf';

export const commentList = ['RTF document'];
export const acronym = 'RTF';
export const expandedAcronym = 'Rich Text Format';
export const genericIconName = 'x-office-document';
export const aliasList = ['text/rtf'];
export const subClassOfList = ['text/plain'];
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

/** About glob */
const glob0 = '*.rtf';

export const globList = [
  {
    pattern: glob0,
    weight: null,
    caseSensitive: false,
  },
];

export const globPatternList = [glob0];
