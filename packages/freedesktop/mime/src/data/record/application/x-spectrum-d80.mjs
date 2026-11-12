/** The media type this record describes. */
export const mediaType = 'application/x-spectrum-d80';

export const commentList = ['Didaktik D40/D80 floppy disk image'];
export const acronym = null;
export const expandedAcronym = null;
export const genericIconName = null;
export const aliasList = [];
export const subClassOfList = [];
export const magicList = [
  {
    priority: null,
    matchList: [
      {
        type: 'string',
        value: 'SDOS',
        offset: '204',
        mask: null,
        matchList: [],
      },
    ],
  },
];
export const treeMagicList = [];
export const rootXmlList = [];

/** About glob */
const glob0 = '*.d80';
const glob1 = '*.d40';

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
