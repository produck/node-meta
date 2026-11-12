/** The media type this record describes. */
export const mediaType = 'application/xspf+xml';

export const commentList = ['XSPF playlist'];
export const acronym = 'XSPF';
export const expandedAcronym = 'XML Shareable Playlist Format';
export const genericIconName = 'audio-x-generic';
export const aliasList = ['application/x-xspf+xml'];
export const subClassOfList = ['application/xml'];
export const magicList = [
  {
    priority: null,
    matchList: [
      {
        type: 'string',
        value: '<playlist version="1',
        offset: '0:64',
        mask: null,
        matchList: [],
      },
      {
        type: 'string',
        value: '<playlist version=\'1',
        offset: '0:64',
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
    namespaceURI: 'http://xspf.org/ns/0/',
    localName: 'playlist',
  },
];

/** About glob */
const glob0 = '*.xspf';

export const globList = [
  {
    pattern: glob0,
    weight: null,
    caseSensitive: false,
  },
];

export const globPatternList = [glob0];
