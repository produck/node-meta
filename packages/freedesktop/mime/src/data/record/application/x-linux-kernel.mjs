/** The media type this record describes. */
export const mediaType = 'application/x-linux-kernel';

export const commentList = ['Linux kernel'];
export const acronym = null;
export const expandedAcronym = null;
export const genericIconName = 'application-x-executable';
export const aliasList = [];
export const subClassOfList = ['application/x-executable'];
export const globList = [
  {
    pattern: 'bzImage*',
    weight: null,
    caseSensitive: true,
  },
  {
    pattern: 'zImage*',
    weight: null,
    caseSensitive: true,
  },
  {
    pattern: 'vmlinux*',
    weight: null,
    caseSensitive: true,
  },
  {
    pattern: 'vmlinuz*',
    weight: null,
    caseSensitive: true,
  },
];
export const magicList = [
  {
    priority: null,
    matchList: [
      {
        type: 'string',
        value: 'HdrS',
        offset: '514',
        mask: null,
        matchList: [],
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
];
export const treeMagicList = [];
export const rootXmlList = [];
