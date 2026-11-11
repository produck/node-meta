/** The media type this record describes. */
export const mediaType = 'application/gpx+xml';

export const commentList = ['GPX geographic data'];
export const acronym = 'GPX';
export const expandedAcronym = 'GPS Exchange Format';
export const genericIconName = null;
export const aliasList = [
  'application/gpx',
  'application/x-gpx+xml',
  'application/x-gpx',
];
export const subClassOfList = ['application/xml'];
export const globList = [
  {
    pattern: '*.gpx',
    weight: null,
    caseSensitive: false,
  },
];
export const magicList = [];
export const treeMagicList = [];
export const rootXmlList = [
  {
    type: null,
    namespaceURI: 'http://www.topografix.com/GPX/1/0',
    localName: 'gpx',
  },
  {
    type: null,
    namespaceURI: 'http://www.topografix.com/GPX/1/1',
    localName: 'gpx',
  },
];
