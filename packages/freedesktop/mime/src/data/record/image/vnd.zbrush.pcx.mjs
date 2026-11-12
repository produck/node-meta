/** The media type this record describes. */
export const mediaType = 'image/vnd.zbrush.pcx';

export const commentList = ['PCX image'];
export const acronym = 'PCX';
export const expandedAcronym = 'PiCture eXchange';
export const genericIconName = null;
export const aliasList = ['image/x-pcx'];
export const subClassOfList = [];
export const magicList = [
  {
    priority: null,
    matchList: [
      {
        type: 'byte',
        value: '10',
        offset: '0',
        mask: null,
        matchList: [
          {
            type: 'byte',
            value: '0',
            offset: '1',
            mask: null,
            matchList: [],
          },
          {
            type: 'byte',
            value: '2',
            offset: '1',
            mask: null,
            matchList: [],
          },
          {
            type: 'byte',
            value: '3',
            offset: '1',
            mask: null,
            matchList: [],
          },
          {
            type: 'byte',
            value: '5',
            offset: '1',
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
const glob0 = '*.pcx';

export const globList = [
  {
    pattern: glob0,
    weight: null,
    caseSensitive: false,
  },
];

export const globPatternList = [glob0];
