/** The media type this record describes. */
export const mediaType = 'application/x-xbel';

export const commentList = ['XBEL bookmarks'];
export const acronym = 'XBEL';
export const expandedAcronym = 'XML Bookmark Exchange Language';
export const genericIconName = 'text-html';
export const aliasList = [];
export const subClassOfList = ['application/xml'];
export const globList = [
  {
    pattern: '*.xbel',
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
        value: '<!DOCTYPE\\ xbel',
        offset: '0:256',
        mask: null,
        matchList: [],
      },
    ],
  },
];
export const treeMagicList = [];
export const rootXmlList = [];
