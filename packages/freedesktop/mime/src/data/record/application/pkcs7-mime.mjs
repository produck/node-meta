/** The media type this record describes. */
export const mediaType = 'application/pkcs7-mime';

export const commentList = ['PKCS#7 file'];
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
    pattern: '*.p7c',
    weight: null,
    caseSensitive: false,
  },
  {
    pattern: '*.p7m',
    weight: null,
    caseSensitive: false,
  },
  {
    pattern: '*.p7z',
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
        value: '-----BEGIN PKCS7-----',
        offset: '0',
        mask: null,
        matchList: [],
      },
      {
        type: 'string',
        value: '\\x30\\x66\\x06\\x09\\x2a\\x86\\x48\\x86\\xf7\\x0d\\x01\\x07',
        offset: '0',
        mask: null,
        matchList: [],
      },
    ],
  },
];
export const treeMagicList = [];
export const rootXmlList = [];
