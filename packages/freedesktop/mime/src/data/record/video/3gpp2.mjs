/** The media type this record describes. */
export const mediaType = 'video/3gpp2';

export const commentList = ['3GPP2 multimedia file'];
export const acronym = '3GPP2';
export const expandedAcronym = '3rd Generation Partnership Project 2';
export const genericIconName = null;
export const aliasList = ['audio/3gpp2'];
export const subClassOfList = [];
export const magicList = [
  {
    priority: null,
    matchList: [
      {
        type: 'string',
        value: 'ftyp3g2',
        offset: '4',
        mask: null,
        matchList: [],
      },
    ],
  },
];
export const treeMagicList = [];
export const rootXmlList = [];

/** About glob */
const glob0 = '*.3g2';
const glob1 = '*.3gp2';
const glob2 = '*.3gpp2';

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
