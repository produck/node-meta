/** The media type this record describes. */
export const mediaType = 'application/x-x509-ca-cert';

export const commentList = ['X.509 CA certificate'];
export const acronym = 'CA';
export const expandedAcronym = 'Certificate Authority';
export const genericIconName = null;
export const aliasList = [];
export const subClassOfList = ['application/pkix-cert'];
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

/** About glob */
const glob0 = '*.cer';
const glob1 = '*.cert';
const glob2 = '*.crt';
const glob3 = '*.der';
const glob4 = '*.pem';

export const globList = [
  {
    pattern: glob0,
    weight: 40,
    caseSensitive: false,
  },
  {
    pattern: glob1,
    weight: 40,
    caseSensitive: false,
  },
  {
    pattern: glob2,
    weight: 40,
    caseSensitive: false,
  },
  {
    pattern: glob3,
    weight: null,
    caseSensitive: false,
  },
  {
    pattern: glob4,
    weight: null,
    caseSensitive: false,
  },
];

export const globPatternList = [glob0, glob1, glob2, glob3, glob4];
