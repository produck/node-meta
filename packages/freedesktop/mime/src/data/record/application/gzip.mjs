/** The media type this record describes. */
export const mediaType = 'application/gzip';

export const commentList = ['Gzip archive'];
export const acronym = null;
export const expandedAcronym = null;
export const genericIconName = 'package-x-generic';
export const aliasList = ['application/x-gzip'];
export const subClassOfList = [];
export const globList = [
  {
    pattern: '*.gz',
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
        value: '\\037\\213',
        offset: '0',
        mask: null,
        matchList: [],
      },
    ],
  },
];
export const treeMagicList = [];
export const rootXmlList = [];
