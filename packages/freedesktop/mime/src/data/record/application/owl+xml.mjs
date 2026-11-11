/** The media type this record describes. */
export const mediaType = 'application/owl+xml';

export const commentList = ['OWL XML file'];
export const acronym = 'OWL';
export const expandedAcronym = 'Web Ontology Language';
export const genericIconName = null;
export const aliasList = [];
export const subClassOfList = ['application/xml'];
export const globList = [
  {
    pattern: '*.owx',
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
        value: '<Ontology',
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
    namespaceURI: 'http://www.w3.org/2002/07/owl#',
    localName: 'Ontology',
  },
];
