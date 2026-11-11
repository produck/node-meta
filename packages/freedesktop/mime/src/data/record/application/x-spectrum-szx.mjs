/** The media type this record describes. */
export const mediaType = 'application/x-spectrum-szx';

export const commentList = ['ZX Spectrum SZX snapshot'];
export const acronym = null;
export const expandedAcronym = null;
export const genericIconName = null;
export const aliasList = [];
export const subClassOfList = [];
export const globList = [
  {
    pattern: '*.szx',
    weight: null,
    caseSensitive: false,
  },
  {
    pattern: '*.zx-state',
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
        value: 'ZXST',
        offset: '0',
        mask: null,
        matchList: [],
      },
    ],
  },
];
export const treeMagicList = [];
export const rootXmlList = [];
