/** The media type this record describes. */
export const mediaType = 'model/gltf-binary';

export const commentList = ['glTF model'];
export const acronym = 'glTF';
export const expandedAcronym = 'GL Transmission Format';
export const genericIconName = 'image-x-generic';
export const aliasList = [];
export const subClassOfList = [];
export const globList = [
  {
    pattern: '*.glb',
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
        value: 'glTF',
        offset: '0',
        mask: null,
        matchList: [],
      },
    ],
  },
];
export const treeMagicList = [];
export const rootXmlList = [];
