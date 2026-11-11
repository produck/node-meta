/** The media type this record describes. */
export const mediaType = 'application/metalink+xml';

export const commentList = ['Metalink file'];
export const acronym = null;
export const expandedAcronym = null;
export const genericIconName = null;
export const aliasList = [];
export const subClassOfList = ['application/xml'];
export const globList = [
  {
    pattern: '*.metalink',
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
        value: '<metalink version="3.0"',
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
    namespaceURI: 'http://www.metalinker.org/',
    localName: 'metalink',
  },
];
