/** The media type this record describes. */
export const mediaType = 'application/x-fds-disk';

export const commentList = ['Nintendo FDS disk image'];
export const acronym = 'FDS';
export const expandedAcronym = 'Famicom Disk System';
export const genericIconName = null;
export const aliasList = [];
export const subClassOfList = [];
export const magicList = [
  {
    priority: null,
    matchList: [
      {
        type: 'string',
        value: '*NINTENDO-HVC*',
        offset: '1',
        mask: null,
        matchList: [],
      },
    ],
  },
];
export const treeMagicList = [];
export const rootXmlList = [];

/** About glob */
const glob0 = '*.fds';

export const globList = [
  {
    pattern: glob0,
    weight: null,
    caseSensitive: false,
  },
];

export const globPatternList = [glob0];
