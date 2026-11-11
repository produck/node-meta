/** The media type this record describes. */
export const mediaType = 'application/x-java';

export const commentList = ['Java class'];
export const acronym = null;
export const expandedAcronym = null;
export const genericIconName = null;
export const aliasList = [
  'application/java',
  'application/java-byte-code',
  'application/java-vm',
  'application/x-java-class',
  'application/x-java-vm',
];
export const subClassOfList = [];
export const globList = [
  {
    pattern: '*.class',
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
        value: '0xcafebabe',
        offset: '0',
        mask: null,
        matchList: [],
      },
    ],
  },
];
export const treeMagicList = [];
export const rootXmlList = [];
