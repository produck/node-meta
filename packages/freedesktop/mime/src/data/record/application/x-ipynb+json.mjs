/** The media type this record describes. */
export const mediaType = 'application/x-ipynb+json';

export const commentList = ['Jupyter notebook document'];
export const acronym = null;
export const expandedAcronym = null;
export const genericIconName = 'x-office-document';
export const aliasList = [];
export const subClassOfList = ['application/json'];
export const globList = [
  {
    pattern: '*.ipynb',
    weight: null,
    caseSensitive: false,
  },
];
export const magicList = [
  {
    priority: null,
    matchList: [
      {
        type: 'string',
        value: '{',
        offset: '0',
        mask: null,
        matchList: [
          {
            type: 'string',
            value: '"cells":',
            offset: '1:256',
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
