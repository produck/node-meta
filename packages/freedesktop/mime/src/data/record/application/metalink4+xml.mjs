/** The media type this record describes. */
export const mediaType = 'application/metalink4+xml';

export const commentList = ['Metalink file'];
export const acronym = null;
export const expandedAcronym = null;
export const genericIconName = null;
export const aliasList = [];
export const subClassOfList = ['application/xml'];
export const globList = [
  {
    pattern: '*.meta4',
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
        value: '<metalink xmlns="urn',
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
    namespaceURI: 'urn:ietf:params:xml:ns:metalink',
    localName: 'metalink',
  },
];
