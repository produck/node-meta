/** The media type this record describes. */
export const mediaType = 'application/pgp-signature';

export const commentList = ['Detached OpenPGP signature'];
export const acronym = null;
export const expandedAcronym = null;
export const genericIconName = null;
export const aliasList = [];
export const subClassOfList = [];
export const globList = [
  {
    pattern: '*.asc',
    weight: 10,
    caseSensitive: false,
  },
  {
    pattern: '*.sig',
    weight: null,
    caseSensitive: false,
  },
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
];
export const magicList = [
  {
    priority: null,
    matchList: [
      {
        type: 'string',
        value: '-----BEGIN PGP SIGNATURE-----',
        offset: '0',
        mask: null,
        matchList: [],
      },
    ],
  },
];
export const treeMagicList = [];
export const rootXmlList = [];
