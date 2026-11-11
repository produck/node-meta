/** The media type this record describes. */
export const mediaType = 'application/x-wii-wad';

export const commentList = ['WiiWare bundle'];
export const acronym = null;
export const expandedAcronym = null;
export const genericIconName = 'application-x-executable';
export const aliasList = [];
export const subClassOfList = [];
export const globList = [
  {
    pattern: '*.wad',
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
        value: 'Is\\0\\0',
        offset: '4',
        mask: null,
        matchList: [],
      },
      {
        type: 'string',
        value: 'ib\\0\\0',
        offset: '4',
        mask: null,
        matchList: [],
      },
      {
        type: 'string',
        value: 'Bk\\0\\0',
        offset: '4',
        mask: null,
        matchList: [],
      },
    ],
  },
];
export const treeMagicList = [];
export const rootXmlList = [];
