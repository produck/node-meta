/** The media type this record describes. */
export const mediaType = 'application/smil+xml';

export const commentList = ['SMIL document'];
export const acronym = 'SMIL';
export const expandedAcronym = 'Synchronized Multimedia Integration Language';
export const genericIconName = 'video-x-generic';
export const aliasList = ['application/smil'];
export const subClassOfList = ['application/xml'];
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

/** About glob */
const glob0 = '*.smil';
const glob1 = '*.smi';
const glob2 = '*.sml';
const glob3 = '*.kino';

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
  {
    pattern: glob2,
    weight: null,
    caseSensitive: false,
  },
  {
    pattern: glob3,
    weight: null,
    caseSensitive: false,
  },
];

export const globPatternList = [glob0, glob1, glob2, glob3];
