/** The media type this record describes. */
export const mediaType = 'model/mtl';

export const commentList = ['OBJ 3D model material library'];
export const acronym = null;
export const expandedAcronym = null;
export const genericIconName = 'image-x-generic';
export const aliasList = [];
export const subClassOfList = ['text/plain'];
export const magicList = [
  {
    priority: null,
    matchList: [
      {
        type: 'string',
        value: '# Blender MTL File: \'',
        offset: '0',
        mask: null,
        matchList: [],
      },
      {
        type: 'string',
        value: 'newmtl ',
        offset: '0:256',
        mask: null,
        matchList: [],
      },
    ],
  },
];
export const treeMagicList = [];
export const rootXmlList = [];

/** About glob */
const glob0 = '*.mtl';

export const globList = [
  {
    pattern: glob0,
    weight: null,
    caseSensitive: false,
  },
];

export const globPatternList = [glob0];
