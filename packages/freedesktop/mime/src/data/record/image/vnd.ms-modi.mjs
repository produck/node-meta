/** The media type this record describes. */
export const mediaType = 'image/vnd.ms-modi';

export const commentList = ['MDI image'];
export const acronym = 'MDI';
export const expandedAcronym = 'Microsoft Document Imaging';
export const genericIconName = null;
export const aliasList = [];
export const subClassOfList = [];
export const globList = [
  {
    pattern: '*.mdi',
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
        value: '\\x45\\x50\\x2A\\x00',
        offset: '0',
        mask: null,
        matchList: [],
      },
    ],
  },
];
export const treeMagicList = [];
export const rootXmlList = [];
