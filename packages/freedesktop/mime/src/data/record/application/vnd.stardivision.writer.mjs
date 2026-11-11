/** The media type this record describes. */
export const mediaType = 'application/vnd.stardivision.writer';

export const commentList = ['StarWriter 5 document'];
export const acronym = null;
export const expandedAcronym = null;
export const genericIconName = 'x-office-document';
export const aliasList = [];
export const subClassOfList = ['application/x-ole-storage'];
export const globList = [
  {
    pattern: '*.sdw',
    weight: null,
    caseSensitive: false,
  },
  {
    pattern: '*.vor',
    weight: null,
    caseSensitive: false,
  },
];
export const magicList = [
  {
    priority: 90,
    matchList: [
      {
        type: 'string',
        value: '\\xd0\\xcf\\x11\\xe0\\xa1\\xb1\\x1a\\xe1',
        offset: '0',
        mask: null,
        matchList: [
          {
            type: 'string',
            value:
              '\\xd1\\xf9\\x0c\\xc2\\xae\\x85\\xd1\\x11\\xaa\\xb4\\x00\\x06\\x09\\x7d\\x56\\x1a',
            offset: '592:8192',
            mask: null,
            matchList: [],
          },
        ],
      },
      {
        type: 'string',
        value: 'StarWriter',
        offset: '2089',
        mask: null,
        matchList: [],
      },
    ],
  },
];
export const treeMagicList = [];
export const rootXmlList = [];
