/** The media type this record describes. */
export const mediaType = 'application/x-x509-ca-cert';

export const commentList = ['X.509 CA certificate'];
export const acronym = 'CA';
export const expandedAcronym = 'Certificate Authority';
export const genericIconName = null;
export const aliasList = [];
export const subClassOfList = ['application/pkix-cert'];
export const globList = [
  {
    pattern: '*.cer',
    weight: 40,
    caseSensitive: false,
  },
  {
    pattern: '*.cert',
    weight: 40,
    caseSensitive: false,
  },
  {
    pattern: '*.crt',
    weight: 40,
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
        value: '-----BEGIN CA CERTIFICATE-----',
        offset: '0',
        mask: null,
        matchList: [],
      },
      {
        type: 'string',
        value: '-----BEGIN TRUSTED CERTIFICATE-----',
        offset: '0',
        mask: null,
        matchList: [],
      },
    ],
  },
];
export const treeMagicList = [];
export const rootXmlList = [];
