/** The media type this record describes. */
export const mediaType = 'application/x-java-jnlp-file';

export const commentList = ['JNLP file'];
export const acronym = 'JNLP';
export const expandedAcronym = 'Java Network Launching Protocol';
export const genericIconName = 'text-x-script';
export const aliasList = [];
export const subClassOfList = ['application/xml'];
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

/** About glob */
const glob0 = '*.jnlp';

export const globList = [
  {
    pattern: glob0,
    weight: null,
    caseSensitive: false,
  },
];

export const globPatternList = [glob0];
