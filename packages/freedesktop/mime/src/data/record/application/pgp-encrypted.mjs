/** The media type this record describes. */
export const mediaType = 'application/pgp-encrypted';

export const commentList = ['PGP/MIME-encrypted message header'];
export const acronym = null;
export const expandedAcronym = null;
export const genericIconName = null;
export const aliasList = ['application/pgp'];
export const subClassOfList = [];
export const globList = [
  {
    pattern: '*.pgp',
    weight: null,
    caseSensitive: false,
  },
  {
    pattern: '*.gpg',
    weight: null,
    caseSensitive: false,
  },
  {
    pattern: '*.asc',
    weight: 10,
    caseSensitive: false,
  },
];
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
