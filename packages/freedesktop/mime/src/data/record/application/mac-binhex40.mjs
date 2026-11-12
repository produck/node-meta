/** The media type this record describes. */
export const mediaType = 'application/mac-binhex40';

export const commentList = ['Macintosh BinHex-encoded file'];
export const acronym = null;
export const expandedAcronym = null;
export const genericIconName = 'package-x-generic';
export const aliasList = [];
export const subClassOfList = ['text/plain'];
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

/** About glob */
const glob0 = '*.hqx';

export const globList = [
  {
    pattern: glob0,
    weight: null,
    caseSensitive: false,
  },
];

export const globPatternList = [glob0];
