/** The media type this record describes. */
export const mediaType = 'application/vnd.quark.quarkxpress';

export const commentList = ['QuarkXPress document'];
export const acronym = null;
export const expandedAcronym = null;
export const genericIconName = 'x-office-document';
export const aliasList = [];
export const subClassOfList = [];
export const globList = [
  {
    pattern: '*.qwd',
    weight: null,
    caseSensitive: false,
  },
  {
    pattern: '*.qwt',
    weight: null,
    caseSensitive: false,
  },
  {
    pattern: '*.qxb',
    weight: null,
    caseSensitive: false,
  },
  {
    pattern: '*.qxd',
    weight: null,
    caseSensitive: false,
  },
  {
    pattern: '*.qxl',
    weight: null,
    caseSensitive: false,
  },
  {
    pattern: '*.qxp',
    weight: null,
    caseSensitive: false,
  },
  {
    pattern: '*.qxt',
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
        value: 'XPR3',
        offset: '4',
        mask: null,
        matchList: [],
      },
    ],
  },
];
export const treeMagicList = [];
export const rootXmlList = [];
