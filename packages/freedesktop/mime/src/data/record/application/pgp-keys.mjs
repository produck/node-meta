/** The media type this record describes. */
export const mediaType = 'application/pgp-keys';

export const commentList = ['PGP keys'];
export const acronym = 'PGP';
export const expandedAcronym = 'Pretty Good Privacy';
export const genericIconName = null;
export const aliasList = [];
export const subClassOfList = [];
export const globList = [
  {
    pattern: '*.skr',
    weight: null,
    caseSensitive: false,
  },
  {
    pattern: '*.pkr',
    weight: null,
    caseSensitive: false,
  },
  {
    pattern: '*.asc',
    weight: 10,
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
  {
    pattern: '*.key',
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
        value: '-----BEGIN PGP PUBLIC KEY BLOCK-----',
        offset: '0',
        mask: null,
        matchList: [],
      },
      {
        type: 'string',
        value: '-----BEGIN PGP PRIVATE KEY BLOCK-----',
        offset: '0',
        mask: null,
        matchList: [],
      },
      {
        type: 'big16',
        value: '0x9501',
        offset: '0',
        mask: null,
        matchList: [],
      },
      {
        type: 'big16',
        value: '0x9500',
        offset: '0',
        mask: null,
        matchList: [],
      },
      {
        type: 'big16',
        value: '0x9900',
        offset: '0',
        mask: null,
        matchList: [],
      },
      {
        type: 'big16',
        value: '0x9901',
        offset: '0',
        mask: null,
        matchList: [],
      },
    ],
  },
];
export const treeMagicList = [];
export const rootXmlList = [];
