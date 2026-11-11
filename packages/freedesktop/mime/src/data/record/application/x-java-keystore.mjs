/** The media type this record describes. */
export const mediaType = 'application/x-java-keystore';

export const commentList = ['Java keystore'];
export const acronym = null;
export const expandedAcronym = null;
export const genericIconName = null;
export const aliasList = [];
export const subClassOfList = [];
export const globList = [
  {
    pattern: '*.jks',
    weight: null,
    caseSensitive: false,
  },
  {
    pattern: '*.ks',
    weight: null,
    caseSensitive: false,
  },
  {
    pattern: 'cacerts',
    weight: null,
    caseSensitive: false,
  },
];
export const magicList = [
  {
    priority: null,
    matchList: [
      {
        type: 'big32',
        value: '0xfeedfeed',
        offset: '0',
        mask: null,
        matchList: [],
      },
    ],
  },
];
export const treeMagicList = [];
export const rootXmlList = [];
