/** The media type this record describes. */
export const mediaType = 'application/x-java-jce-keystore';

export const commentList = ['Java JCE keystore'];
export const acronym = 'JCE';
export const expandedAcronym = 'Java Cryptography Extension';
export const genericIconName = null;
export const aliasList = [];
export const subClassOfList = [];
export const globList = [
  {
    pattern: '*.jceks',
    weight: null,
    caseSensitive: false,
  },
];
export const magicList = [
  {
    priority: null,
    matchList: [
      {
        type: 'host32',
        value: '0xcececece',
        offset: '0',
        mask: null,
        matchList: [],
      },
    ],
  },
];
export const treeMagicList = [];
export const rootXmlList = [];
