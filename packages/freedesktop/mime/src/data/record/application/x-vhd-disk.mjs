/** The media type this record describes. */
export const mediaType = 'application/x-vhd-disk';

export const commentList = ['VHD disk image'];
export const acronym = 'VHD';
export const expandedAcronym = 'Virtual Hard Disk';
export const genericIconName = null;
export const aliasList = ['application/x-virtualbox-vhd'];
export const subClassOfList = [];
export const magicList = [
  {
    priority: null,
    matchList: [
      {
        type: 'string',
        value: 'conectix',
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
const glob0 = '*.vhd';
const glob1 = '*.vpc';

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
];

export const globPatternList = [glob0, glob1];
