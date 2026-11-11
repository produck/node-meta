/** The media type this record describes. */
export const mediaType = 'application/x-nintendo-3ds-executable';

export const commentList = ['Nintendo 3DS Executable'];
export const acronym = null;
export const expandedAcronym = null;
export const genericIconName = 'application-x-executable';
export const aliasList = [];
export const subClassOfList = [];
export const globList = [
  {
    pattern: '*.3dsx',
    weight: null,
    caseSensitive: false,
  },
];
export const magicList = [
  {
    priority: 40,
    matchList: [
      {
        type: 'string',
        value: '3DSX',
        offset: '0',
        mask: null,
        matchList: [],
      },
    ],
  },
];
export const treeMagicList = [];
export const rootXmlList = [];
