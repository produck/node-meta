/** The media type this record describes. */
export const mediaType = 'application/x-pico8-rom';

export const commentList = ['PICO-8 binary code'];
export const acronym = null;
export const expandedAcronym = null;
export const genericIconName = null;
export const aliasList = [];
export const subClassOfList = ['application/x-executable'];
export const globList = [
  {
    pattern: '*.p8.rom',
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
