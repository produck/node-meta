/** The media type this record describes. */
export const mediaType = 'application/x-dia-diagram';

export const commentList = ['Dia diagram'];
export const acronym = null;
export const expandedAcronym = null;
export const genericIconName = 'image-x-generic';
export const aliasList = [];
export const subClassOfList = ['application/xml'];
export const magicList = [
  {
    priority: null,
    matchList: [
      {
        type: 'string',
        value: '<dia:',
        offset: '5:100',
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
    namespaceURI: 'http://www.lysator.liu.se/~alla/dia/',
    localName: 'diagram',
  },
];

/** About glob */
const glob0 = '*.dia';

export const globList = [
  {
    pattern: glob0,
    weight: null,
    caseSensitive: false,
  },
];

export const globPatternList = [glob0];
