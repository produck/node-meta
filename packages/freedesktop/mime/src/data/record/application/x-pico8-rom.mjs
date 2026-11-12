/** The media type this record describes. */
export const mediaType = 'application/x-pico8-rom';

export const commentList = ['PICO-8 binary code'];
export const acronym = null;
export const expandedAcronym = null;
export const genericIconName = null;
export const aliasList = [];
export const subClassOfList = ['application/x-executable'];
export const magicList = [
  {
    priority: null,
    matchList: [
      {
        type: 'string',
        value: ':c:\\x00',
        offset: '0',
        mask: null,
        matchList: [],
      },
      {
        type: 'string',
        value: '\\x00pxa',
        offset: '0',
        mask: null,
        matchList: [],
      },
    ],
  },
];
export const treeMagicList = [];
export const rootXmlList = [];

/** About glob */
const glob0 = '*.p8.rom';

export const globList = [
  {
    pattern: glob0,
    weight: null,
    caseSensitive: false,
  },
];

export const globPatternList = [glob0];
