/** The media type this record describes. */
export const mediaType = 'application/x-efi-linux-kernel';

export const commentList = ['Linux kernel with EFI stub'];
export const acronym = 'EFI';
export const expandedAcronym = 'Extensible Firmware Interface';
export const genericIconName = 'application-x-executable';
export const aliasList = [];
export const subClassOfList = [
  'application/vnd.microsoft.portable-executable',
  'application/x-linux-kernel',
];
export const magicList = [
  {
    priority: 95,
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
            offset: '64',
            mask: null,
            matchList: [
              {
                type: 'little32',
                value: '0x818223cd',
                offset: '56',
                mask: null,
                matchList: [
                  {
                    type: 'string',
                    value: 'HdrS',
                    offset: '514',
                    mask: null,
                    matchList: [],
                  },
                  {
                    type: 'little16',
                    value: '0x6264',
                    offset: '68',
                    mask: null,
                    matchList: [],
                  },
                ],
              },
              {
                type: 'little32',
                value: '0x016f2818',
                offset: '36',
                mask: null,
                matchList: [],
              },
              {
                type: 'big32',
                value: '0x016f2818',
                offset: '36',
                mask: null,
                matchList: [],
              },
              {
                type: 'string',
                value: 'ARMd',
                offset: '56',
                mask: null,
                matchList: [],
              },
              {
                type: 'string',
                value: 'RSC\\x05',
                offset: '56',
                mask: null,
                matchList: [],
              },
            ],
          },
        ],
      },
    ],
  },
];
export const treeMagicList = [];
export const rootXmlList = [];

/** About glob */
const glob0 = 'vmlinux.efi';
const glob1 = 'vmlinuz.efi';
const glob2 = '*.efi';
const glob3 = 'bzImage*';
const glob4 = 'zImage*';
const glob5 = 'vmlinux*';
const glob6 = 'vmlinuz*';

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
  {
    pattern: glob2,
    weight: 40,
    caseSensitive: false,
  },
  {
    pattern: glob3,
    weight: 40,
    caseSensitive: true,
  },
  {
    pattern: glob4,
    weight: 40,
    caseSensitive: true,
  },
  {
    pattern: glob5,
    weight: 40,
    caseSensitive: true,
  },
  {
    pattern: glob6,
    weight: 40,
    caseSensitive: true,
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
];
