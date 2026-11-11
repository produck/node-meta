/** The media type this record describes. */
export const mediaType = 'model/obj';

export const commentList = ['OBJ 3D model'];
export const acronym = null;
export const expandedAcronym = null;
export const genericIconName = 'image-x-generic';
export const aliasList = ['application/prs.wavefront-obj'];
export const subClassOfList = ['text/plain'];
export const globList = [
  {
    pattern: '*.obj',
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
        value: ' OBJ File: \'',
        offset: '0:64',
        mask: null,
        matchList: [],
      },
      {
        type: 'string',
        value: 'mtllib ',
        offset: '0:256',
        mask: null,
        matchList: [],
      },
    ],
  },
];
export const treeMagicList = [];
export const rootXmlList = [];
