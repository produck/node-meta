/** The media type this record describes. */
export const mediaType = 'application/x-executable';

export const commentList = ['Executable'];
export const acronym = null;
export const expandedAcronym = null;
export const genericIconName = 'application-x-executable';
export const aliasList = [];
export const subClassOfList = [];
export const globList = [];
export const magicList = [
  {
    priority: 40,
    matchList: [
      {
        type: 'string',
        value: '\\177ELF',
        offset: '0',
        mask: null,
        matchList: [
          {
            type: 'byte',
            value: '1',
            offset: '5',
            mask: null,
            matchList: [],
          },
        ],
      },
      {
        type: 'string',
        value: '\\177ELF',
        offset: '0',
        mask: null,
        matchList: [
          {
            type: 'byte',
            value: '2',
            offset: '5',
            mask: null,
            matchList: [],
          },
        ],
      },
      {
        type: 'little16',
        value: '0x521c',
        offset: '0',
        mask: null,
        matchList: [],
      },
      {
        type: 'host16',
        value: '0420',
        offset: '0',
        mask: null,
        matchList: [],
      },
      {
        type: 'host16',
        value: '0421',
        offset: '0',
        mask: null,
        matchList: [],
      },
      {
        type: 'little16',
        value: '0603',
        offset: '0',
        mask: null,
        matchList: [],
      },
    ],
  },
];
export const treeMagicList = [];
export const rootXmlList = [];
