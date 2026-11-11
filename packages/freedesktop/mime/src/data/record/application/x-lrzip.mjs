/** The media type this record describes. */
export const mediaType = 'application/x-lrzip';

export const commentList = ['Lrzip archive'];
export const acronym = 'Lrzip';
export const expandedAcronym = 'Long Range Zip';
export const genericIconName = 'package-x-generic';
export const aliasList = [];
export const subClassOfList = [];
export const globList = [
  {
    pattern: '*.lrz',
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
        value: 'LRZI',
        offset: '0',
        mask: null,
        matchList: [],
      },
    ],
  },
];
export const treeMagicList = [];
export const rootXmlList = [];
