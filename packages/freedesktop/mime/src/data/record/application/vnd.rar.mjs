/** The media type this record describes. */
export const mediaType = 'application/vnd.rar';

export const commentList = ['RAR archive'];
export const acronym = 'RAR';
export const expandedAcronym = 'Roshal ARchive';
export const genericIconName = 'package-x-generic';
export const aliasList = ['application/x-rar', 'application/x-rar-compressed'];
export const subClassOfList = [];
export const magicList = [
  {
    priority: 60,
    matchList: [
      {
        type: 'string',
        value: 'Rar!',
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
const glob0 = '*.rar';

export const globList = [
  {
    pattern: glob0,
    weight: null,
    caseSensitive: false,
  },
];

export const globPatternList = [glob0];
