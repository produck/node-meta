/** The media type this record describes. */
export const mediaType = 'application/raml+yaml';

export const commentList = ['RAML document'];
export const acronym = 'RAML';
export const expandedAcronym = 'RESTful API Modeling Language';
export const genericIconName = null;
export const aliasList = [];
export const subClassOfList = ['application/yaml'];
export const globList = [
  {
    pattern: '*.raml',
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
        value: '#%RAML ',
        offset: '0',
        mask: null,
        matchList: [],
      },
    ],
  },
];
export const treeMagicList = [];
export const rootXmlList = [];
