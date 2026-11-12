/** The media type this record describes. */
export const mediaType = 'application/x-pico8-source';

export const commentList = ['PICO-8 editable code'];
export const acronym = null;
export const expandedAcronym = null;
export const genericIconName = null;
export const aliasList = [];
export const subClassOfList = ['text/plain'];
export const magicList = [
  {
    priority: null,
    matchList: [
      {
        type: 'string',
        value: 'pico-8 cartridge // http://www.pico-8.com',
        offset: '0',
        mask: null,
        matchList: [
          {
            type: 'string',
            value: '\\x0a',
            offset: '41',
            mask: null,
            matchList: [],
          },
          {
            type: 'string',
            value: '\\x0d',
            offset: '41',
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
const glob0 = '*.p8';

export const globList = [
  {
    pattern: glob0,
    weight: null,
    caseSensitive: false,
  },
];

export const globPatternList = [glob0];
