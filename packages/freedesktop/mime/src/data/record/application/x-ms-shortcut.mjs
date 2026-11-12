/** The media type this record describes. */
export const mediaType = 'application/x-ms-shortcut';

export const commentList = ['Windows shortcut'];
export const acronym = null;
export const expandedAcronym = null;
export const genericIconName = 'emblem-symbolic-link';
export const aliasList = ['application/x-win-lnk'];
export const subClassOfList = [];
export const magicList = [
  {
    priority: null,
    matchList: [
      {
        type: 'string',
        value:
          '\\x4c\\x00\\x00\\x00\\x01\\x14\\x02\\x00\\x00\\x00\\x00\\x00\\xc0\\x00\\x00\\x00\\x00\\x00\\x00\\x46',
        offset: '0',
        mask: null,
        matchList: [],
      },
    ],
  },
];
export const treeMagicList = [];
export const rootXmlList = [];

/** About glob */
const glob0 = '*.lnk';

export const globList = [
  {
    pattern: glob0,
    weight: null,
    caseSensitive: false,
  },
];

export const globPatternList = [glob0];
