/** The media type this record describes. */
export const mediaType = 'application/x-stuffitx';

export const commentList = ['StuffIt X archive'];
export const acronym = null;
export const expandedAcronym = null;
export const genericIconName = 'package-x-generic';
export const aliasList = ['application/x-sitx'];
export const subClassOfList = [];
export const globList = [
  {
    pattern: '*.sitx',
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
        value: 'StuffIt!',
        offset: '0',
        mask: null,
        matchList: [],
      },
    ],
  },
];
export const treeMagicList = [];
export const rootXmlList = [];
