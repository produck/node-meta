/** The media type this record describes. */
export const mediaType = 'application/its+xml';

export const commentList = ['ITS translation file'];
export const acronym = 'ITS';
export const expandedAcronym = 'Internationalization Tag Set';
export const genericIconName = 'text-x-generic';
export const aliasList = [];
export const subClassOfList = ['application/xml'];
export const globList = [
  {
    pattern: '*.its',
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
        value: '<its',
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
    namespaceURI: 'http://www.w3.org/2005/11/its',
    localName: 'its',
  },
];
