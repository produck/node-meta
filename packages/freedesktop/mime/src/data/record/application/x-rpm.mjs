/** The media type this record describes. */
export const mediaType = 'application/x-rpm';

export const commentList = ['RPM package'];
export const acronym = null;
export const expandedAcronym = null;
export const genericIconName = 'package-x-generic';
export const aliasList = ['application/x-redhat-package-manager'];
export const subClassOfList = [];
export const globList = [
  {
    pattern: '*.rpm',
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
        value: '\\xed\\xab\\xee\\xdb',
        offset: '0',
        mask: null,
        matchList: [],
      },
    ],
  },
];
export const treeMagicList = [];
export const rootXmlList = [];
