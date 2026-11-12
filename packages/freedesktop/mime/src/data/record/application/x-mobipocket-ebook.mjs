/** The media type this record describes. */
export const mediaType = 'application/x-mobipocket-ebook';

export const commentList = ['Mobipocket e-book'];
export const acronym = null;
export const expandedAcronym = null;
export const genericIconName = 'x-office-document';
export const aliasList = [];
export const subClassOfList = ['application/vnd.palm'];
export const magicList = [
  {
    priority: 30,
    matchList: [
      {
        type: 'string',
        value: 'TEXtREAd',
        offset: '60',
        mask: null,
        matchList: [],
      },
    ],
  },
  {
    priority: 80,
    matchList: [
      {
        type: 'string',
        value: 'BOOKMOBI',
        offset: '60',
        mask: null,
        matchList: [],
      },
    ],
  },
];
export const treeMagicList = [];
export const rootXmlList = [];

/** About glob */
const glob0 = '*.mobi';
const glob1 = '*.prc';

export const globList = [
  {
    pattern: glob0,
    weight: null,
    caseSensitive: false,
  },
  {
    pattern: glob1,
    weight: null,
    caseSensitive: false,
  },
];

export const globPatternList = [glob0, glob1];
