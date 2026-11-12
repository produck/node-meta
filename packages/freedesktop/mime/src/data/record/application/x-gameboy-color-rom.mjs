/** The media type this record describes. */
export const mediaType = 'application/x-gameboy-color-rom';

export const commentList = ['Game Boy Color ROM'];
export const acronym = null;
export const expandedAcronym = null;
export const genericIconName = 'application-x-executable';
export const aliasList = [];
export const subClassOfList = [];
export const magicList = [
  {
    priority: null,
    matchList: [
      {
        type: 'string',
        value:
          '\\xce\\xed\\x66\\x66\\xcc\\x0d\\x00\\x0b\\x03\\x73\\x00\\x83\\x00\\x0c\\x00\\x0d\\x00\\x08',
        offset: '260',
        mask: null,
        matchList: [
          {
            type: 'byte',
            value: '0x80',
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

/** About glob */
const glob0 = '*.gbc';
const glob1 = '*.cgb';

export const globList = [
  {
    pattern: glob0,
    weight: null,
    caseSensitive: false,
  },
  {
    pattern: glob1,
    weight: null,
    caseSensitive: false,
  },
];

export const globPatternList = [glob0, glob1];
