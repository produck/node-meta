/** The media type this record describes. */
export const mediaType = 'model/vrml';

export const commentList = ['VRML document'];
export const acronym = 'VRML';
export const expandedAcronym = 'Virtual Reality Modeling Language';
export const genericIconName = 'x-office-document';
export const aliasList = [];
export const subClassOfList = ['text/plain'];
export const globList = [
  {
    pattern: '*.vrm',
    weight: null,
    caseSensitive: false,
  },
  {
    pattern: '*.vrml',
    weight: null,
    caseSensitive: false,
  },
  {
    pattern: '*.wrl',
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
        value: '#VRML ',
        offset: '0',
        mask: null,
        matchList: [],
      },
    ],
  },
];
export const treeMagicList = [];
export const rootXmlList = [];
