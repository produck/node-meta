/** The media type this record describes. */
export const mediaType = 'application/pkcs8-encrypted';

export const commentList = ['PKCS#8 private key (encrypted)'];
export const acronym = 'PKCS';
export const expandedAcronym = 'Public-Key Cryptography Standards';
export const genericIconName = null;
export const aliasList = [];
export const subClassOfList = [];
export const magicList = [
  {
    priority: null,
    matchList: [
      {
        type: 'string',
        value: '-----BEGIN ENCRYPTED PRIVATE KEY-----',
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
const glob0 = '*.der';
const glob1 = '*.p8e';
const glob2 = '*.pem';

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
    weight: null,
    caseSensitive: false,
  },
];

export const globPatternList = [glob0, glob1, glob2];
