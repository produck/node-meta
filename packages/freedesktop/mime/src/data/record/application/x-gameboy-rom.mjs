/** The media type this record describes. */
export const mediaType = 'application/x-gameboy-rom';

export const commentList = ['Game Boy ROM'];
export const acronym = null;
export const expandedAcronym = null;
export const genericIconName = 'application-x-executable';
export const aliasList = [];
export const subClassOfList = [];
export const globList = [
  {
    pattern: '*.gb',
    weight: null,
    caseSensitive: false,
  },
  {
    pattern: '*.sgb',
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
        value:
          '\\xce\\xed\\x66\\x66\\xcc\\x0d\\x00\\x0b\\x03\\x73\\x00\\x83\\x00\\x0c\\x00\\x0d\\x00\\x08\\x11\\x1f\\x88\\x89\\x00\\x0e',
        offset: '260',
        mask: null,
        matchList: [
          {
            type: 'byte',
            value: '0x0',
            offset: '323',
            mask: '0x80',
            matchList: [],
          },
        ],
      },
    ],
  },
];
export const treeMagicList = [];
export const rootXmlList = [];
