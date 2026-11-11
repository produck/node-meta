/** The media type this record describes. */
export const mediaType = 'image/x-xcf';

export const commentList = ['GIMP image'];
export const acronym = null;
export const expandedAcronym = null;
export const genericIconName = null;
export const aliasList = [];
export const subClassOfList = [];
export const globList = [
  {
    pattern: '*.xcf',
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
        value: 'gimp xcf file',
        offset: '0',
        mask: null,
        matchList: [],
      },
      {
        type: 'string',
        value: 'gimp xcf v',
        offset: '0',
        mask: null,
        matchList: [],
      },
    ],
  },
];
export const treeMagicList = [];
export const rootXmlList = [];
