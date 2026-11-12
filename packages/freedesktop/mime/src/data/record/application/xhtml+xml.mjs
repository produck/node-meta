/** The media type this record describes. */
export const mediaType = 'application/xhtml+xml';

export const commentList = ['XHTML page'];
export const acronym = 'XHTML';
export const expandedAcronym = 'Extensible HyperText Markup Language';
export const genericIconName = 'text-html';
export const aliasList = [];
export const subClassOfList = ['application/xml'];
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

/** About glob */
const glob0 = '*.xhtml';
const glob1 = '*.xht';
const glob2 = '*.html';
const glob3 = '*.htm';

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
  {
    pattern: glob2,
    weight: null,
    caseSensitive: false,
  },
  {
    pattern: glob3,
    weight: null,
    caseSensitive: false,
  },
];

export const globPatternList = [glob0, glob1, glob2, glob3];
