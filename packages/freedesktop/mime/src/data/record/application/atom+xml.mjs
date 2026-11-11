/** The media type this record describes. */
export const mediaType = 'application/atom+xml';

export const commentList = ['Atom syndication feed'];
export const acronym = null;
export const expandedAcronym = null;
export const genericIconName = 'text-html';
export const aliasList = [];
export const subClassOfList = ['application/xml'];
export const globList = [
  {
    pattern: '*.atom',
    weight: null,
    caseSensitive: false,
  },
];
export const magicList = [
  {
    priority: 70,
    matchList: [
      {
        type: 'string',
        value: '<feed ',
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
    namespaceURI: 'http://www.w3.org/2005/Atom',
    localName: 'feed',
  },
];
