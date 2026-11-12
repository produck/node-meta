/** The media type this record describes. */
export const mediaType = 'application/vnd.nintendo.nitro.rom';

export const commentList = ['Nintendo DS ROM'];
export const acronym = 'DS';
export const expandedAcronym = 'Dual Screen/Developers\' System';
export const genericIconName = 'application-x-executable';
export const aliasList = ['application/x-nintendo-ds-rom'];
export const subClassOfList = [];
export const magicList = [
  {
    priority: null,
    matchList: [
      {
        type: 'string',
        value: '\\x24\\xFF\\xAE\\x51\\x69\\x9A\\xA2\\x21',
        offset: '192',
        mask: null,
        matchList: [],
      },
    ],
  },
];
export const treeMagicList = [];
export const rootXmlList = [];

/** About glob */
const glob0 = '*.nds';

export const globList = [
  {
    pattern: glob0,
    weight: null,
    caseSensitive: false,
  },
];

export const globPatternList = [glob0];
