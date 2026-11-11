/** The media type this record describes. */
export const mediaType = 'application/pkix-crl';

export const commentList = ['Certificate revocation list'];
export const acronym = null;
export const expandedAcronym = null;
export const genericIconName = null;
export const aliasList = [];
export const subClassOfList = [];
export const globList = [
  {
    pattern: '*.crl',
    weight: null,
    caseSensitive: false,
  },
  {
    pattern: '*.der',
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
        value: '-----BEGIN X509 CRL-----',
        offset: '0',
        mask: null,
        matchList: [],
      },
    ],
  },
];
export const treeMagicList = [];
export const rootXmlList = [];
