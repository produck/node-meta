/** The media type this record describes. */
export const mediaType = 'application/rdf+xml';

export const commentList = ['RDF file'];
export const acronym = 'RDF';
export const expandedAcronym = 'Resource Description Framework';
export const genericIconName = null;
export const aliasList = ['text/rdf'];
export const subClassOfList = ['application/xml'];
export const magicList = [];
export const treeMagicList = [];
export const rootXmlList = [
  {
    type: null,
    namespaceURI: 'http://www.w3.org/1999/02/22-rdf-syntax-ns#',
    localName: 'RDF',
  },
];

/** About glob */
const glob0 = '*.rdf';
const glob1 = '*.rdfs';
const glob2 = '*.owl';

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
];

export const globPatternList = [glob0, glob1, glob2];
