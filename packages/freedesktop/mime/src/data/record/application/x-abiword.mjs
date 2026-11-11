/** The media type this record describes. */
export const mediaType = 'application/x-abiword';

export const commentList = ['AbiWord document'];
export const acronym = null;
export const expandedAcronym = null;
export const genericIconName = 'x-office-document';
export const aliasList = [];
export const subClassOfList = ['application/xml'];
export const globList = [
  {
    pattern: '*.abw',
    weight: null,
    caseSensitive: false,
  },
  {
    pattern: '*.abw.CRASHED',
    weight: null,
    caseSensitive: false,
  },
  {
    pattern: '*.abw.gz',
    weight: null,
    caseSensitive: false,
  },
  {
    pattern: '*.zabw',
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
