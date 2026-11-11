/** The media type this record describes. */
export const mediaType = 'application/mathematica';

export const commentList = ['Mathematica Notebook file'];
export const acronym = null;
export const expandedAcronym = null;
export const genericIconName = 'x-office-document';
export const aliasList = ['application/x-mathematica'];
export const subClassOfList = ['text/plain'];
export const globList = [
  {
    pattern: '*.nb',
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
        value: '(************** Content-type: application/mathematica',
        offset: '0',
        mask: null,
        matchList: [],
      },
      {
        type: 'string',
        value:
          'This notebook can be used on any computer system with Mathematica',
        offset: '100:256',
        mask: null,
        matchList: [],
      },
      {
        type: 'string',
        value: 'This is a Mathematica Notebook file.  It contains ASCII text',
        offset: '10:256',
        mask: null,
        matchList: [],
      },
    ],
  },
];
export const treeMagicList = [];
export const rootXmlList = [];
