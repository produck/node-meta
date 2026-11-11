/** The media type this record describes. */
export const mediaType = 'application/vnd.ms-cab-compressed';

export const commentList = ['Microsoft Cabinet archive'];
export const acronym = null;
export const expandedAcronym = null;
export const genericIconName = 'package-x-generic';
export const aliasList = ['zz-application/zz-winassoc-cab'];
export const subClassOfList = [];
export const globList = [
  {
    pattern: '*.cab',
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
        value: 'MSCF\\0\\0\\0\\0',
        offset: '0',
        mask: null,
        matchList: [],
      },
    ],
  },
];
export const treeMagicList = [];
export const rootXmlList = [];
