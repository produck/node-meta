/** The media type this record describes. */
export const mediaType = 'application/x-fictionbook+xml';

export const commentList = ['FictionBook document'];
export const acronym = null;
export const expandedAcronym = null;
export const genericIconName = null;
export const aliasList = ['application/x-fictionbook'];
export const subClassOfList = ['application/xml'];
export const magicList = [
  {
    priority: 80,
    matchList: [
      {
        type: 'string',
        value: '<FictionBook',
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
    namespaceURI: 'http://www.gribuser.ru/xml/fictionbook/2.0',
    localName: 'FictionBook',
  },
];

/** About glob */
const glob0 = '*.fb2';

export const globList = [
  {
    pattern: glob0,
    weight: null,
    caseSensitive: false,
  },
];

export const globPatternList = [glob0];
