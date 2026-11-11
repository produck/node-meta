/** The media type this record describes. */
export const mediaType = 'image/vnd.djvu';

export const commentList = ['DjVu image'];
export const acronym = null;
export const expandedAcronym = null;
export const genericIconName = null;
export const aliasList = ['image/x-djvu', 'image/x.djvu'];
export const subClassOfList = [];
export const globList = [
  {
    pattern: '*.djvu',
    weight: null,
    caseSensitive: false,
  },
  {
    pattern: '*.djv',
    weight: null,
    caseSensitive: false,
  },
];
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
