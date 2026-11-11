/** The media type this record describes. */
export const mediaType = 'application/x-gba-rom';

export const commentList = ['Game Boy Advance ROM'];
export const acronym = null;
export const expandedAcronym = null;
export const genericIconName = 'application-x-executable';
export const aliasList = [];
export const subClassOfList = [];
export const globList = [
  {
    pattern: '*.gba',
    weight: null,
    caseSensitive: false,
  },
  {
    pattern: '*.agb',
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
        value: '\\x24\\xFF\\xAE\\x51\\x69\\x9A\\xA2\\x21',
        offset: '4',
        mask: null,
        matchList: [],
      },
    ],
  },
];
export const treeMagicList = [];
export const rootXmlList = [];
