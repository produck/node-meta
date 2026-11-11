/** The media type this record describes. */
export const mediaType = 'application/vnd.bzip3';

export const commentList = ['Bzip3 archive'];
export const acronym = null;
export const expandedAcronym = null;
export const genericIconName = 'package-x-generic';
export const aliasList = ['application/x-bzip3'];
export const subClassOfList = [];
export const globList = [
  {
    pattern: '*.bz3',
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
        value: 'BZ3v1',
        offset: '0',
        mask: null,
        matchList: [],
      },
    ],
  },
];
export const treeMagicList = [];
export const rootXmlList = [];
