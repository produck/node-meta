/** The media type this record describes. */
export const mediaType = 'application/x-vhdx-disk';

export const commentList = ['VHDX disk image'];
export const acronym = 'VHDX';
export const expandedAcronym = 'Virtual Hard Disk v2';
export const genericIconName = null;
export const aliasList = ['application/x-virtualbox-vhdx'];
export const subClassOfList = [];
export const magicList = [
  {
    priority: null,
    matchList: [
      {
        type: 'string',
        value: 'vhdxfile',
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
const glob0 = '*.vhdx';

export const globList = [
  {
    pattern: glob0,
    weight: null,
    caseSensitive: false,
  },
];

export const globPatternList = [glob0];
