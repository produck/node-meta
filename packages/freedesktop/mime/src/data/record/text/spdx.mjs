/** The media type this record describes. */
export const mediaType = 'text/spdx';

export const commentList = ['SPDX document'];
export const acronym = 'SPDX';
export const expandedAcronym = 'Software Package Data Exchange';
export const genericIconName = null;
export const aliasList = [];
export const subClassOfList = ['text/plain'];
export const globList = [
  {
    pattern: '*.spdx',
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
        value: 'SPDXVersion: SPDX-',
        offset: '0',
        mask: null,
        matchList: [],
      },
    ],
  },
];
export const treeMagicList = [];
export const rootXmlList = [];
