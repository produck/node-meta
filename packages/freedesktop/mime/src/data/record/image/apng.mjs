/** The media type this record describes. */
export const mediaType = 'image/apng';

export const commentList = ['Animated PNG image'];
export const acronym = 'PNG';
export const expandedAcronym = 'Portable Network Graphics';
export const genericIconName = null;
export const aliasList = ['image/vnd.mozilla.apng'];
export const subClassOfList = ['image/png'];
export const globList = [
  {
    pattern: '*.apng',
    weight: null,
    caseSensitive: false,
  },
  {
    pattern: '*.png',
    weight: 40,
    caseSensitive: false,
  },
];
export const magicList = [
  {
    priority: 60,
    matchList: [
      {
        type: 'string',
        value: '\\x89PNG\\r\\n\\x1A\\n',
        offset: '0',
        mask: null,
        matchList: [
          {
            type: 'string',
            value: 'acTL',
            offset: '33:16384',
            mask: null,
            matchList: [],
          },
        ],
      },
    ],
  },
];
export const treeMagicList = [];
export const rootXmlList = [];
