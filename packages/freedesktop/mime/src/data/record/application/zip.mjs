/** The media type this record describes. */
export const mediaType = 'application/zip';

export const commentList = ['Zip archive'];
export const acronym = null;
export const expandedAcronym = null;
export const genericIconName = 'package-x-generic';
export const aliasList = ['application/x-zip-compressed', 'application/x-zip'];
export const subClassOfList = [];
export const globList = [
  {
    pattern: '*.zip',
    weight: null,
    caseSensitive: false,
  },
  {
    pattern: '*.zipx',
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
        value: 'PK\\003\\004',
        offset: '0',
        mask: null,
        matchList: [],
      },
    ],
  },
];
export const treeMagicList = [];
export const rootXmlList = [];
