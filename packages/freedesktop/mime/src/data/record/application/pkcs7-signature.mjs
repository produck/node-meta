/** The media type this record describes. */
export const mediaType = 'application/pkcs7-signature';

export const commentList = ['Detached S/MIME signature'];
export const acronym = 'S/MIME';
export const expandedAcronym = 'Secure/Multipurpose Internet Mail Extensions';
export const genericIconName = null;
export const aliasList = [];
export const subClassOfList = [];
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

/** About glob */
const glob0 = '*.der';
const glob1 = '*.p7s';
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
