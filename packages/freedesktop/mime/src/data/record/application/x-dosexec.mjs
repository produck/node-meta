/** The media type this record describes. */
export const mediaType = 'application/x-dosexec';

export const commentList = ['DOS executable'];
export const acronym = 'DOS';
export const expandedAcronym = 'Disk Operating System';
export const genericIconName = 'application-x-executable';
export const aliasList = [];
export const subClassOfList = ['application/x-msdownload'];
export const magicList = [
  {
    priority: 60,
    matchList: [
      {
        type: 'string',
        value: 'MZ',
        offset: '0',
        mask: null,
        matchList: [
          {
            type: 'little16',
            value: '0',
            offset: '24',
            mask: '0xffc0',
            matchList: [],
          },
        ],
      },
    ],
  },
];
export const treeMagicList = [];
export const rootXmlList = [];

/** About glob */
const glob0 = '*.exe';

export const globList = [
  {
    pattern: glob0,
    weight: 30,
    caseSensitive: false,
  },
];

export const globPatternList = [glob0];
