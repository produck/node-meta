/** The media type this record describes. */
export const mediaType = 'application/vnd.ms-cab-compressed';

export const commentList = ['Microsoft Cabinet archive'];
export const acronym = null;
export const expandedAcronym = null;
export const genericIconName = 'package-x-generic';
export const aliasList = ['zz-application/zz-winassoc-cab'];
export const subClassOfList = [];
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

/** About glob */
const glob0 = '*.cab';

export const globList = [
  {
    pattern: glob0,
    weight: null,
    caseSensitive: false,
  },
];

export const globPatternList = [glob0];
