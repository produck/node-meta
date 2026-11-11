/** The media type this record describes. */
export const mediaType = 'application/vnd.stardivision.impress';

export const commentList = ['StarImpress 5 presentation'];
export const acronym = null;
export const expandedAcronym = null;
export const genericIconName = 'x-office-presentation';
export const aliasList = [];
export const subClassOfList = ['application/x-ole-storage'];
export const globList = [
  {
    pattern: '*.sdd',
    weight: null,
    caseSensitive: false,
  },
];
export const magicList = [
  {
    priority: 70,
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
              '\\x21\\x72\\x5c\\x56\\xbc\\x85\\xd1\\x11\\x89\\xd0\\x00\\x80\\x29\\xe4\\xb0\\xb1',
            offset: '592:8192',
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
