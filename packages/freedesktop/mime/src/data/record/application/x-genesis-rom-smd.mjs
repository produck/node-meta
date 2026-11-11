/** The media type this record describes. */
export const mediaType = 'application/x-genesis-rom-smd';

export const commentList = ['Genesis ROM (SMD dump)'];
export const acronym = 'SMD';
export const expandedAcronym = 'Super Magic Drive';
export const genericIconName = 'application-x-executable';
export const aliasList = [];
export const subClassOfList = [];
export const globList = [
  {
    pattern: '*.smd',
    weight: null,
    caseSensitive: false,
  },
];
export const magicList = [
  {
    priority: null,
    matchList: [
      {
        type: 'byte',
        value: '3',
        offset: '1',
        mask: null,
        matchList: [
          {
            type: 'string',
            value: '\\xAA\\xBB\\x06',
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
