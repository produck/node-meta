/** The media type this record describes. */
export const mediaType = 'application/vnd.microsoft.portable-executable';

export const commentList = ['Windows or EFI program'];
export const acronym = 'EFI';
export const expandedAcronym = 'Extensible Firmware Interface';
export const genericIconName = 'application-x-executable';
export const aliasList = [];
export const subClassOfList = ['application/x-msdownload'];
export const globList = [
  {
    pattern: '*.exe',
    weight: 40,
    caseSensitive: false,
  },
  {
    pattern: '*.dll',
    weight: 40,
    caseSensitive: false,
  },
  {
    pattern: '*.cpl',
    weight: 40,
    caseSensitive: false,
  },
  {
    pattern: '*.drv',
    weight: 40,
    caseSensitive: false,
  },
  {
    pattern: '*.scr',
    weight: 40,
    caseSensitive: false,
  },
  {
    pattern: '*.efi',
    weight: null,
    caseSensitive: false,
  },
  {
    pattern: '*.ocx',
    weight: null,
    caseSensitive: false,
  },
  {
    pattern: '*.sys',
    weight: null,
    caseSensitive: false,
  },
];
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
