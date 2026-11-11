/** The media type this record describes. */
export const mediaType = 'image/vnd.djvu+multipage';

export const commentList = ['DjVu document'];
export const acronym = null;
export const expandedAcronym = null;
export const genericIconName = 'x-office-document';
export const aliasList = [];
export const subClassOfList = ['image/vnd.djvu'];
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
            value: 'DJVM',
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
            value: 'DJVM',
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
