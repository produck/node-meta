/** The media type this record describes. */
export const mediaType = 'application/x-fluid';

export const commentList = ['FLTK Fluid file'];
export const acronym = 'FLTK';
export const expandedAcronym = 'Fast Light Toolkit';
export const genericIconName = 'x-office-document';
export const aliasList = [];
export const subClassOfList = ['text/plain'];
export const globList = [
  {
    pattern: '*.fl',
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
        value: '# data file for the Fltk',
        offset: '0',
        mask: null,
        matchList: [],
      },
    ],
  },
];
export const treeMagicList = [];
export const rootXmlList = [];
