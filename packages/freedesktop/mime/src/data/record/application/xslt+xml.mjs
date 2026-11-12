/** The media type this record describes. */
export const mediaType = 'application/xslt+xml';

export const commentList = ['XSLT stylesheet'];
export const acronym = 'XSLT';
export const expandedAcronym = 'eXtensible Stylesheet Language Transformation';
export const genericIconName = 'text-x-generic';
export const aliasList = [];
export const subClassOfList = ['application/xml'];
export const magicList = [
  {
    priority: null,
    matchList: [
      {
        type: 'string',
        value: '<xsl:stylesheet',
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
    namespaceURI: 'http://www.w3.org/1999/XSL/Transform',
    localName: 'stylesheet',
  },
];

/** About glob */
const glob0 = '*.xsl';
const glob1 = '*.xslt';

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
