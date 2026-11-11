/** The media type this record describes. */
export const mediaType = 'application/x-mobipocket-ebook';

export const commentList = ['Mobipocket e-book'];
export const acronym = null;
export const expandedAcronym = null;
export const genericIconName = 'x-office-document';
export const aliasList = [];
export const subClassOfList = ['application/vnd.palm'];
export const globList = [
  {
    pattern: '*.mobi',
    weight: null,
    caseSensitive: false,
  },
  {
    pattern: '*.prc',
    weight: null,
    caseSensitive: false,
  },
];
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
