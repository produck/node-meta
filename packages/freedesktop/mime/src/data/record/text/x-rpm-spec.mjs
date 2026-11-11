/** The media type this record describes. */
export const mediaType = 'text/x-rpm-spec';

export const commentList = ['RPM spec file'];
export const acronym = 'RPM';
export const expandedAcronym = 'Red Hat Package Manager';
export const genericIconName = null;
export const aliasList = [];
export const subClassOfList = ['text/plain'];
export const globList = [
  {
    pattern: '*.spec',
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
        value: 'Summary: ',
        offset: '0',
        mask: null,
        matchList: [],
      },
      {
        type: 'string',
        value: '%define ',
        offset: '0',
        mask: null,
        matchList: [],
      },
    ],
  },
];
export const treeMagicList = [];
export const rootXmlList = [];
