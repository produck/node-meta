/** The media type this record describes. */
export const mediaType = 'text/scriptlet';

export const commentList = ['Windows scriptlet'];
export const acronym = null;
export const expandedAcronym = null;
export const genericIconName = 'text-x-script';
export const aliasList = [];
export const subClassOfList = ['application/xml'];
export const magicList = [
  {
    priority: 60,
    matchList: [
      {
        type: 'string',
        value: '<scriptlet',
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
const glob0 = '*.sct';
const glob1 = '*.wsc';

export const globList = [
  {
    pattern: glob0,
    weight: 40,
    caseSensitive: false,
  },
  {
    pattern: glob1,
    weight: 40,
    caseSensitive: false,
  },
];

export const globPatternList = [glob0, glob1];
