/** The media type this record describes. */
export const mediaType = 'model/step';

export const commentList = ['STEP 3D model'];
export const acronym = null;
export const expandedAcronym = null;
export const genericIconName = 'image-x-generic';
export const aliasList = [];
export const subClassOfList = [];
export const globList = [
  {
    pattern: '*.step',
    weight: null,
    caseSensitive: false,
  },
  {
    pattern: '*.stp',
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
        value: 'ISO-10303-21;',
        offset: '0',
        mask: null,
        matchList: [],
      },
    ],
  },
];
export const treeMagicList = [];
export const rootXmlList = [];
