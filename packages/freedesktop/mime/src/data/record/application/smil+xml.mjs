/** The media type this record describes. */
export const mediaType = 'application/smil+xml';

export const commentList = ['SMIL document'];
export const acronym = 'SMIL';
export const expandedAcronym = 'Synchronized Multimedia Integration Language';
export const genericIconName = 'video-x-generic';
export const aliasList = ['application/smil'];
export const subClassOfList = ['application/xml'];
export const globList = [
  {
    pattern: '*.smil',
    weight: null,
    caseSensitive: false,
  },
  {
    pattern: '*.smi',
    weight: null,
    caseSensitive: false,
  },
  {
    pattern: '*.sml',
    weight: null,
    caseSensitive: false,
  },
  {
    pattern: '*.kino',
    weight: null,
    caseSensitive: false,
  },
];
export const magicList = [
  {
    priority: 55,
    matchList: [
      {
        type: 'string',
        value: '<smil',
        offset: '0:256',
        mask: null,
        matchList: [],
      },
    ],
  },
];
export const treeMagicList = [];
export const rootXmlList = [
  {
    type: null,
    namespaceURI: 'http://www.w3.org/2001/SMIL20/Language',
    localName: 'smil',
  },
  {
    type: null,
    namespaceURI: 'http://www.w3.org/2005/SMIL21/Language',
    localName: 'smil',
  },
  {
    type: null,
    namespaceURI: 'http://www.w3.org/ns/SMIL',
    localName: 'smil',
  },
];
