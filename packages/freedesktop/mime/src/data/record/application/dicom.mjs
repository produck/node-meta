/** The media type this record describes. */
export const mediaType = 'application/dicom';

export const commentList = ['DICOM image'];
export const acronym = 'DICOM';
export const expandedAcronym = 'Digital Imaging and Communications in Medicine';
export const genericIconName = 'image-x-generic';
export const aliasList = [];
export const subClassOfList = [];
export const magicList = [
  {
    priority: null,
    matchList: [
      {
        type: 'string',
        value: 'DICM',
        offset: '128',
        mask: null,
        matchList: [],
      },
    ],
  },
];
export const treeMagicList = [];
export const rootXmlList = [];

/** About glob */
const glob0 = 'dicomdir';
const glob1 = '*.dcm';

export const globList = [
  {
    pattern: glob0,
    weight: null,
    caseSensitive: false,
  },
  {
    pattern: glob1,
    weight: null,
    caseSensitive: false,
  },
];

export const globPatternList = [glob0, glob1];
