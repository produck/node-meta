/** The media type this record describes. */
export const mediaType = 'application/owl+xml';

export const commentList = ['OWL XML file'];
export const acronym = 'OWL';
export const expandedAcronym = 'Web Ontology Language';
export const genericIconName = null;
export const aliasList = [];
export const subClassOfList = ['application/xml'];
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

/** About glob */
const glob0 = '*.owx';

export const globList = [
  {
    pattern: glob0,
    weight: null,
    caseSensitive: false,
  },
];

export const globPatternList = [glob0];
