/** The media type this record describes. */
export const mediaType = 'model/x-brep';

export const commentList = ['BREP 3D model'];
export const acronym = 'BREP';
export const expandedAcronym = 'Boundary REPresentation';
export const genericIconName = 'image-x-generic';
export const aliasList = [];
export const subClassOfList = ['text/plain'];
export const magicList = [
  {
    priority: null,
    matchList: [
      {
        type: 'string',
        value: 'DBRep_DrawableShape',
        offset: '0',
        mask: null,
        matchList: [],
      },
    ],
  },
];
export const treeMagicList = [];
export const rootXmlList = [];

/** About glob */
const glob0 = '*.brep';

export const globList = [
  {
    pattern: glob0,
    weight: null,
    caseSensitive: false,
  },
];

export const globPatternList = [glob0];
