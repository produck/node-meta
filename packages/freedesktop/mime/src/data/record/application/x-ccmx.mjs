/** The media type this record describes. */
export const mediaType = 'application/x-ccmx';

export const commentList = ['CCMX color correction file'];
export const acronym = null;
export const expandedAcronym = null;
export const genericIconName = 'text-x-generic';
export const aliasList = [];
export const subClassOfList = ['text/plain'];
export const globList = [
  {
    pattern: '*.ccmx',
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
        value: 'CCMX',
        offset: '0',
        mask: null,
        matchList: [],
      },
    ],
  },
];
export const treeMagicList = [];
export const rootXmlList = [];
