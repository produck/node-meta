/** The media type this record describes. */
export const mediaType = 'application/vnd.microsoft.portable-executable';

export const commentList = ['Windows or EFI program'];
export const acronym = 'EFI';
export const expandedAcronym = 'Extensible Firmware Interface';
export const genericIconName = 'application-x-executable';
export const aliasList = [];
export const subClassOfList = ['application/x-msdownload'];
export const magicList = [
  {
    priority: 90,
    matchList: [
      {
        type: 'string',
        value: 'MZ',
        offset: '0',
        mask: null,
        matchList: [
          {
            type: 'string',
            value: 'PE\\0\\0',
            offset: '64:256',
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
const glob0 = '*.exe';
const glob1 = '*.dll';
const glob2 = '*.cpl';
const glob3 = '*.drv';
const glob4 = '*.scr';
const glob5 = '*.efi';
const glob6 = '*.ocx';
const glob7 = '*.sys';

export const globList = [
  {
    pattern: glob0,
    weight: 40,
    caseSensitive: false,
  },
  {
    pattern: glob1,
    weight: 40,
    caseSensitive: false,
  },
  {
    pattern: glob2,
    weight: 40,
    caseSensitive: false,
  },
  {
    pattern: glob3,
    weight: 40,
    caseSensitive: false,
  },
  {
    pattern: glob4,
    weight: 40,
    caseSensitive: false,
  },
  {
    pattern: glob5,
    weight: null,
    caseSensitive: false,
  },
  {
    pattern: glob6,
    weight: null,
    caseSensitive: false,
  },
  {
    pattern: glob7,
    weight: null,
    caseSensitive: false,
  },
];

export const globPatternList = [
  glob0,
  glob1,
  glob2,
  glob3,
  glob4,
  glob5,
  glob6,
  glob7,
];
