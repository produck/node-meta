/** The media type this record describes. */
export const mediaType = 'application/sparql-query';

export const commentList = ['SPARQL query'];
export const acronym = 'SPARQL';
export const expandedAcronym = 'SPARQL Protocol and RDF Query Language';
export const genericIconName = 'text-x-script';
export const aliasList = [];
export const subClassOfList = ['text/plain'];
export const globList = [
  {
    pattern: '*.rq',
    weight: null,
    caseSensitive: false,
  },
  {
    pattern: '*.qs',
    weight: null,
    caseSensitive: false,
  },
];
export const magicList = [
  {
    priority: 40,
    matchList: [
      {
        type: 'string',
        value: 'PREFIX',
        offset: '0',
        mask: null,
        matchList: [],
      },
    ],
  },
];
export const treeMagicList = [];
export const rootXmlList = [];
