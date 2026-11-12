/** The media type this record describes. */
export const mediaType = 'application/x-eris-link+cbor';

export const commentList = ['ERIS Link'];
export const acronym = 'ERIS';
export const expandedAcronym = 'Encoding for Robust Immutable Storage';
export const genericIconName = null;
export const aliasList = [];
export const subClassOfList = ['application/cbor'];
export const magicList = [
  {
    priority: 90,
    matchList: [
      {
        type: 'string',
        value: '\\xD9\\xD9\\xF7\\x84\\xD9\\x01\\x14\\x58\\x42',
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
const glob0 = '*.eris';

export const globList = [
  {
    pattern: glob0,
    weight: null,
    caseSensitive: false,
  },
];

export const globPatternList = [glob0];
