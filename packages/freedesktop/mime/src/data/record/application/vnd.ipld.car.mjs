/** The media type this record describes. */
export const mediaType = 'application/vnd.ipld.car';

export const commentList = [
  'Archive used for storing and transporting IPLD (InterPlanetary Linked Data)',
];
export const acronym = 'CAR';
export const expandedAcronym = 'Content Addressable aRchive';
export const genericIconName = 'package-x-generic';
export const aliasList = [];
export const subClassOfList = [];
export const magicList = [
  {
    priority: null,
    matchList: [
      {
        type: 'string',
        value: '\\x0a\\xa1\\x67\\x76\\x65\\x72\\x73\\x69\\x6f\\x6e\\x02',
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
const glob0 = '*.car';

export const globList = [
  {
    pattern: glob0,
    weight: null,
    caseSensitive: false,
  },
];

export const globPatternList = [glob0];
