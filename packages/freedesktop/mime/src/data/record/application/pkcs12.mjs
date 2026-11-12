/** The media type this record describes. */
export const mediaType = 'application/pkcs12';

export const commentList = ['PKCS#12 certificate bundle'];
export const acronym = 'PKCS';
export const expandedAcronym = 'Public-Key Cryptography Standards';
export const genericIconName = null;
export const aliasList = ['application/x-pkcs12'];
export const subClassOfList = [];
export const magicList = [];
export const treeMagicList = [];
export const rootXmlList = [];

/** About glob */
const glob0 = '*.der';
const glob1 = '*.p12';
const glob2 = '*.pem';
const glob3 = '*.pfx';

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
  {
    pattern: glob3,
    weight: null,
    caseSensitive: false,
  },
];

export const globPatternList = [glob0, glob1, glob2, glob3];
