/** The media type this record describes. */
export const mediaType = 'application/mac-binhex40';

export const commentList = ['Macintosh BinHex-encoded file'];
export const acronym = null;
export const expandedAcronym = null;
export const genericIconName = 'package-x-generic';
export const aliasList = [];
export const subClassOfList = ['text/plain'];
export const globList = [
  {
    pattern: '*.hqx',
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
        value: '(This file must be converted with BinHex 4.0)',
        offset: '0',
        mask: null,
        matchList: [],
      },
      {
        type: 'string',
        value: '(This file must be converted; you knew that already.)',
        offset: '0',
        mask: null,
        matchList: [],
      },
    ],
  },
];
export const treeMagicList = [];
export const rootXmlList = [];
