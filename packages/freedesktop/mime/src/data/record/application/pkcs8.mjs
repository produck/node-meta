/** The media type this record describes. */
export const mediaType = 'application/pkcs8';

export const commentList = ['PKCS#8 private key'];
export const acronym = 'PKCS';
export const expandedAcronym = 'Public-Key Cryptography Standards';
export const genericIconName = null;
export const aliasList = [];
export const subClassOfList = [];
export const globList = [
  {
    pattern: '*.der',
    weight: null,
    caseSensitive: false,
  },
  {
    pattern: '*.key',
    weight: null,
    caseSensitive: false,
  },
  {
    pattern: '*.p8',
    weight: null,
    caseSensitive: false,
  },
  {
    pattern: '*.pem',
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
        value: '-----BEGIN PRIVATE KEY-----',
        offset: '0',
        mask: null,
        matchList: [],
      },
    ],
  },
];
export const treeMagicList = [];
export const rootXmlList = [];
