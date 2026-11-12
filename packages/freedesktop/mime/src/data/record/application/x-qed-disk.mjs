/** The media type this record describes. */
export const mediaType = 'application/x-qed-disk';

export const commentList = ['QEMU QED disk image'];
export const acronym = 'QED';
export const expandedAcronym = 'QEMU Enhanced Disk';
export const genericIconName = null;
export const aliasList = [];
export const subClassOfList = [];
export const magicList = [
  {
    priority: null,
    matchList: [
      {
        type: 'string',
        value: 'QED\\0',
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
const glob0 = '*.qed';

export const globList = [
  {
    pattern: glob0,
    weight: null,
    caseSensitive: false,
  },
];

export const globPatternList = [glob0];
