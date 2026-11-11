/** The media type this record describes. */
export const mediaType = 'application/xliff+xml';

export const commentList = ['XLIFF translation file'];
export const acronym = 'XLIFF';
export const expandedAcronym = 'XML Localization Interchange File Format';
export const genericIconName = 'text-x-generic';
export const aliasList = ['application/x-xliff'];
export const subClassOfList = ['application/xml'];
export const globList = [
  {
    pattern: '*.xlf',
    weight: null,
    caseSensitive: false,
  },
  {
    pattern: '*.xliff',
    weight: null,
    caseSensitive: false,
  },
];
export const magicList = [
  {
    priority: 80,
    matchList: [
      {
        type: 'string',
        value: '<xliff',
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
    namespaceURI: 'urn:oasis:names:tc:xliff:document:1.1',
    localName: 'xliff',
  },
];
