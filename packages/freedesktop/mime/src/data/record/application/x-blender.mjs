/** The media type this record describes. */
export const mediaType = 'application/x-blender';

export const commentList = ['Blender scene'];
export const acronym = null;
export const expandedAcronym = null;
export const genericIconName = 'image-x-generic';
export const aliasList = [];
export const subClassOfList = [];
export const globList = [
  {
    pattern: '*.blend',
    weight: null,
    caseSensitive: false,
  },
  {
    pattern: '*.blender',
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
        value: 'BLENDER',
        offset: '0',
        mask: null,
        matchList: [],
      },
    ],
  },
];
export const treeMagicList = [];
export const rootXmlList = [];
