/** The media type this record describes. */
export const mediaType = 'application/xhtml+xml';

export const commentList = ['XHTML page'];
export const acronym = 'XHTML';
export const expandedAcronym = 'Extensible HyperText Markup Language';
export const genericIconName = 'text-html';
export const aliasList = [];
export const subClassOfList = ['application/xml'];
export const globList = [
  {
    pattern: '*.xhtml',
    weight: null,
    caseSensitive: false,
  },
  {
    pattern: '*.xht',
    weight: null,
    caseSensitive: false,
  },
  {
    pattern: '*.html',
    weight: null,
    caseSensitive: false,
  },
  {
    pattern: '*.htm',
    weight: null,
    caseSensitive: false,
  },
];
export const magicList = [
  {
    priority: 60,
    matchList: [
      {
        type: 'string',
        value: '//W3C//DTD XHTML ',
        offset: '0:256',
        mask: null,
        matchList: [],
      },
      {
        type: 'string',
        value: 'http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd',
        offset: '0:256',
        mask: null,
        matchList: [],
      },
      {
        type: 'string',
        value: '<html xmlns="http://www.w3.org/1999/xhtml',
        offset: '0:256',
        mask: null,
        matchList: [],
      },
      {
        type: 'string',
        value: '<HTML xmlns="http://www.w3.org/1999/xhtml',
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
    namespaceURI: 'http://www.w3.org/1999/xhtml',
    localName: 'html',
  },
];
