/** The media type this record describes. */
export const mediaType = 'application/x-abiword';

export const commentList = ['AbiWord document'];
export const acronym = null;
export const expandedAcronym = null;
export const genericIconName = 'x-office-document';
export const aliasList = [];
export const subClassOfList = ['application/xml'];
export const magicList = [
  {
    priority: null,
    matchList: [
      {
        type: 'string',
        value: '<abiword',
        offset: '0:256',
        mask: null,
        matchList: [],
      },
      {
        type: 'string',
        value: '<!DOCTYPE abiword',
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
    namespaceURI: 'http://www.abisource.com/awml.dtd',
    localName: 'abiword',
  },
];

/** About glob */
const glob0 = '*.abw';
const glob1 = '*.abw.CRASHED';
const glob2 = '*.abw.gz';
const glob3 = '*.zabw';

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
