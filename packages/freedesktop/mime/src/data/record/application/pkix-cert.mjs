/** The media type this record describes. */
export const mediaType = 'application/pkix-cert';

export const commentList = ['X.509 certificate'];
export const acronym = null;
export const expandedAcronym = null;
export const genericIconName = null;
export const aliasList = [];
export const subClassOfList = [];
export const globList = [
  {
    pattern: '*.cer',
    weight: null,
    caseSensitive: false,
  },
  {
    pattern: '*.cert',
    weight: null,
    caseSensitive: false,
  },
  {
    pattern: '*.crt',
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
        value: '-----BEGIN CERTIFICATE-----',
        offset: '0',
        mask: null,
        matchList: [],
      },
      {
        type: 'string',
        value: '-----BEGIN X509 CERTIFICATE-----',
        offset: '0',
        mask: null,
        matchList: [],
      },
    ],
  },
];
export const treeMagicList = [];
export const rootXmlList = [];
