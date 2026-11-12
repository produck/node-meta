/** The media type this record describes. */
export const mediaType = 'application/pgp-encrypted';

export const commentList = ['PGP/MIME-encrypted message header'];
export const acronym = null;
export const expandedAcronym = null;
export const genericIconName = null;
export const aliasList = ['application/pgp'];
export const subClassOfList = [];
export const magicList = [
  {
    priority: null,
    matchList: [
      {
        type: 'string',
        value: '-----BEGIN PGP MESSAGE-----',
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
const glob0 = '*.pgp';
const glob1 = '*.gpg';
const glob2 = '*.asc';

export const globList = [
  {
    pattern: glob0,
    weight: null,
    caseSensitive: false,
  },
  {
    pattern: glob1,
    weight: null,
    caseSensitive: false,
  },
  {
    pattern: glob2,
    weight: 10,
    caseSensitive: false,
  },
];

export const globPatternList = [glob0, glob1, glob2];
