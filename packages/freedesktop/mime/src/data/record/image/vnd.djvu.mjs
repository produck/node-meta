/** The media type this record describes. */
export const mediaType = 'image/vnd.djvu';

export const commentList = ['DjVu image'];
export const acronym = null;
export const expandedAcronym = null;
export const genericIconName = null;
export const aliasList = ['image/x-djvu', 'image/x.djvu'];
export const subClassOfList = [];
export const magicList = [
  {
    priority: 80,
    matchList: [
      {
        type: 'string',
        value: 'AT&TFORM',
        offset: '0',
        mask: null,
        matchList: [
          {
            type: 'string',
            value: 'DJVU',
            offset: '12',
            mask: null,
            matchList: [],
          },
        ],
      },
      {
        type: 'string',
        value: 'FORM',
        offset: '0',
        mask: null,
        matchList: [
          {
            type: 'string',
            value: 'DJVU',
            offset: '8',
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
const glob0 = '*.djvu';
const glob1 = '*.djv';

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
