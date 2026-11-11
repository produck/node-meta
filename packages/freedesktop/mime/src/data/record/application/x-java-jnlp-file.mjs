/** The media type this record describes. */
export const mediaType = 'application/x-java-jnlp-file';

export const commentList = ['JNLP file'];
export const acronym = 'JNLP';
export const expandedAcronym = 'Java Network Launching Protocol';
export const genericIconName = 'text-x-script';
export const aliasList = [];
export const subClassOfList = ['application/xml'];
export const globList = [
  {
    pattern: '*.jnlp',
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
        value: '<jnlp',
        offset: '0:256',
        mask: null,
        matchList: [],
      },
    ],
  },
];
export const treeMagicList = [];
export const rootXmlList = [];
