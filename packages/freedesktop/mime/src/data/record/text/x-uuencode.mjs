/** The media type this record describes. */
export const mediaType = 'text/x-uuencode';

export const commentList = ['uuencoded file'];
export const acronym = null;
export const expandedAcronym = null;
export const genericIconName = null;
export const aliasList = ['zz-application/zz-winassoc-uu'];
export const subClassOfList = ['text/plain'];
export const globList = [
  {
    pattern: '*.uue',
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
        value: 'begin ',
        offset: '0',
        mask: null,
        matchList: [],
      },
    ],
  },
];
export const treeMagicList = [];
export const rootXmlList = [];
