/** The media type this record describes. */
export const mediaType = 'image/vnd.microsoft.icon';

export const commentList = ['Windows icon'];
export const acronym = null;
export const expandedAcronym = null;
export const genericIconName = null;
export const aliasList = [
  'application/ico',
  'image/ico',
  'image/icon',
  'image/x-ico',
  'image/x-icon',
  'text/ico',
];
export const subClassOfList = [];
export const magicList = [
  {
    priority: null,
    matchList: [
      {
        type: 'string',
        value: '\\0\\0\\1\\0',
        offset: '0',
        mask: null,
        matchList: [
          {
            type: 'string',
            value: '\\0',
            offset: '5',
            mask: null,
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
const glob0 = '*.ico';

export const globList = [
  {
    pattern: glob0,
    weight: null,
    caseSensitive: false,
  },
];

export const globPatternList = [glob0];
