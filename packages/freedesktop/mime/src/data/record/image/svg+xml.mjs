/** The media type this record describes. */
export const mediaType = 'image/svg+xml';

export const commentList = ['SVG image'];
export const acronym = 'SVG';
export const expandedAcronym = 'Scalable Vector Graphics';
export const genericIconName = null;
export const aliasList = [];
export const subClassOfList = ['application/xml'];
export const magicList = [
  {
    priority: 80,
    matchList: [
      {
        type: 'string',
        value: '<!DOCTYPE svg',
        offset: '0:256',
        mask: null,
        matchList: [],
      },
      {
        type: 'string',
        value: '<!-- Created with Inkscape',
        offset: '0',
        mask: null,
        matchList: [],
      },
      {
        type: 'string',
        value: '<svg',
        offset: '0',
        mask: null,
        matchList: [],
      },
    ],
  },
  {
    priority: 45,
    matchList: [
      {
        type: 'string',
        value: '<svg',
        offset: '1:256',
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
    namespaceURI: 'http://www.w3.org/2000/svg',
    localName: 'svg',
  },
];

/** About glob */
const glob0 = '*.svg';

export const globList = [
  {
    pattern: glob0,
    weight: null,
    caseSensitive: false,
  },
];

export const globPatternList = [glob0];
