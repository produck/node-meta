/** The media type this record describes. */
export const mediaType = 'application/dicom';

export const commentList = ['DICOM image'];
export const acronym = 'DICOM';
export const expandedAcronym = 'Digital Imaging and Communications in Medicine';
export const genericIconName = 'image-x-generic';
export const aliasList = [];
export const subClassOfList = [];
export const globList = [
  {
    pattern: 'dicomdir',
    weight: null,
    caseSensitive: false,
  },
  {
    pattern: '*.dcm',
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
