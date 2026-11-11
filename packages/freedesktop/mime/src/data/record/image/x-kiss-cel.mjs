/** The media type this record describes. */
export const mediaType = 'image/x-kiss-cel';

export const commentList = ['KiSS cel'];
export const acronym = 'KiSS';
export const expandedAcronym = 'Kisekae Set System';
export const genericIconName = null;
export const aliasList = [];
export const subClassOfList = [];
export const globList = [
  {
    pattern: '*.cel',
    weight: null,
    caseSensitive: false,
  },
  {
    pattern: '*.kcf',
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
        value: 'KiSS',
        offset: '0',
        mask: null,
        matchList: [],
      },
    ],
  },
];
export const treeMagicList = [];
export const rootXmlList = [];
