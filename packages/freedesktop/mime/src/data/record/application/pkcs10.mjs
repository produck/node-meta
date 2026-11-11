/** The media type this record describes. */
export const mediaType = 'application/pkcs10';

export const commentList = ['PKCS#10 certification request'];
export const acronym = 'PKCS';
export const expandedAcronym = 'Public-Key Cryptography Standards';
export const genericIconName = null;
export const aliasList = [];
export const subClassOfList = [];
export const globList = [
  {
    pattern: '*.csr',
    weight: null,
    caseSensitive: false,
  },
  {
    pattern: '*.der',
    weight: null,
    caseSensitive: false,
  },
  {
    pattern: '*.p10',
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
        value: '-----BEGIN CERTIFICATE REQUEST-----',
        offset: '0',
        mask: null,
        matchList: [],
      },
    ],
  },
];
export const treeMagicList = [];
export const rootXmlList = [];
