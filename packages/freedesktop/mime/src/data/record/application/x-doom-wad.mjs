/** The media type this record describes. */
export const mediaType = 'application/x-doom-wad';

export const commentList = ['Doom WAD file'];
export const acronym = 'WAD';
export const expandedAcronym = 'Where\'s All the Data';
export const genericIconName = 'package-x-generic';
export const aliasList = [];
export const subClassOfList = [];
export const globList = [
  {
    pattern: '*.wad',
    weight: 80,
    caseSensitive: false,
  },
];
export const magicList = [
  {
    priority: null,
    matchList: [
      {
        type: 'string',
        value: 'IWAD',
        offset: '0',
        mask: null,
        matchList: [],
      },
      {
        type: 'string',
        value: 'PWAD',
        offset: '0',
        mask: null,
        matchList: [],
      },
    ],
  },
];
export const treeMagicList = [];
export const rootXmlList = [];
