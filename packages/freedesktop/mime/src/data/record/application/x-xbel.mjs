/** The media type this record describes. */
export const mediaType = 'application/x-xbel';

export const commentList = ['XBEL bookmarks'];
export const acronym = 'XBEL';
export const expandedAcronym = 'XML Bookmark Exchange Language';
export const genericIconName = 'text-html';
export const aliasList = [];
export const subClassOfList = ['application/xml'];
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

/** About glob */
const glob0 = '*.xbel';

export const globList = [
  {
    pattern: glob0,
    weight: null,
    caseSensitive: false,
  },
];

export const globPatternList = [glob0];
