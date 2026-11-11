/** The media type this record describes. */
export const mediaType = 'application/x-mozilla-bookmarks';

export const commentList = ['Mozilla bookmarks'];
export const acronym = null;
export const expandedAcronym = null;
export const genericIconName = 'text-html';
export const aliasList = ['application/x-netscape-bookmarks'];
export const subClassOfList = ['text/html'];
export const globList = [];
export const magicList = [
  {
    priority: 80,
    matchList: [
      {
        type: 'string',
        value: '<!DOCTYPE NETSCAPE-Bookmark-file-1>',
        offset: '0:64',
        mask: null,
        matchList: [],
      },
    ],
  },
];
export const treeMagicList = [];
export const rootXmlList = [];
