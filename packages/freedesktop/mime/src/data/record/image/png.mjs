/** The media type this record describes. */
export const mediaType = 'image/png';

export const commentList = ['PNG image'];
export const acronym = 'PNG';
export const expandedAcronym = 'Portable Network Graphics';
export const genericIconName = null;
export const aliasList = [];
export const subClassOfList = [];
export const globList = [
  {
    pattern: '*.png',
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
        value: '\\x89PNG\\r\\n\\x1A\\n',
        offset: '0',
        mask: null,
        matchList: [],
      },
    ],
  },
];
export const treeMagicList = [];
export const rootXmlList = [];
