/** The media type this record describes. */
export const mediaType = 'video/3gpp';

export const commentList = ['3GPP multimedia file'];
export const acronym = '3GPP';
export const expandedAcronym = '3rd Generation Partnership Project';
export const genericIconName = null;
export const aliasList = [
  'video/3gp',
  'audio/3gpp',
  'video/3gpp-encrypted',
  'audio/3gpp-encrypted',
  'audio/x-rn-3gpp-amr',
  'audio/x-rn-3gpp-amr-encrypted',
  'audio/x-rn-3gpp-amr-wb',
  'audio/x-rn-3gpp-amr-wb-encrypted',
];
export const subClassOfList = ['video/mp4'];
export const magicList = [
  {
    priority: null,
    matchList: [
      {
        type: 'string',
        value: 'ftyp3ge',
        offset: '4',
        mask: null,
        matchList: [],
      },
      {
        type: 'string',
        value: 'ftyp3gg',
        offset: '4',
        mask: null,
        matchList: [],
      },
      {
        type: 'string',
        value: 'ftyp3gp',
        offset: '4',
        mask: null,
        matchList: [],
      },
      {
        type: 'string',
        value: 'ftyp3gs',
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
const glob0 = '*.3gp';
const glob1 = '*.3gpp';
const glob2 = '*.3ga';

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
