/** The media type this record describes. */
export const mediaType = 'application/x-thomson-sap-image';

export const commentList = ['SAP Thomson floppy disk image'];
export const acronym = 'SAP';
export const expandedAcronym = 'Système d\'Archivage Pukall';
export const genericIconName = 'application-x-executable';
export const aliasList = ['application/x-sap-file'];
export const subClassOfList = [];
export const magicList = [
  {
    priority: null,
    matchList: [
      {
        type: 'string',
        value:
          'SYSTEME D\'ARCHIVAGE PUKALL S.A.P. (c) Alexandre PUKALL Avril 1998',
        offset: '1',
        mask: null,
        matchList: [],
      },
    ],
  },
];
export const treeMagicList = [];
export const rootXmlList = [];

/** About glob */
const glob0 = '*.sap';

export const globList = [
  {
    pattern: glob0,
    weight: null,
    caseSensitive: false,
  },
];

export const globPatternList = [glob0];
