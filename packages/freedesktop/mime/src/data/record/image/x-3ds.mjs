/** The media type this record describes. */
export const mediaType = 'image/x-3ds';

export const commentList = ['3D Studio image'];
export const acronym = null;
export const expandedAcronym = null;
export const genericIconName = null;
export const aliasList = [];
export const subClassOfList = [];
export const globList = [
  {
    pattern: '*.3ds',
    weight: null,
    caseSensitive: false,
  },
];
export const magicList = [
  {
    priority: 30,
    matchList: [
      {
        type: 'big16',
        value: '0x4d4d',
        offset: '0',
        mask: null,
        matchList: [],
      },
    ],
  },
];
export const treeMagicList = [];
export const rootXmlList = [];
