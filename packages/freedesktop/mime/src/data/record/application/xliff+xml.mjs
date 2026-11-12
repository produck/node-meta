/** The media type this record describes. */
export const mediaType = 'application/xliff+xml';

export const commentList = ['XLIFF translation file'];
export const acronym = 'XLIFF';
export const expandedAcronym = 'XML Localization Interchange File Format';
export const genericIconName = 'text-x-generic';
export const aliasList = ['application/x-xliff'];
export const subClassOfList = ['application/xml'];
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

/** About glob */
const glob0 = '*.xlf';
const glob1 = '*.xliff';

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
];

export const globPatternList = [glob0, glob1];
