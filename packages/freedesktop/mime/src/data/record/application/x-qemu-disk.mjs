/** The media type this record describes. */
export const mediaType = 'application/x-qemu-disk';

export const commentList = ['QEMU QCOW disk image'];
export const acronym = 'QCOW';
export const expandedAcronym = 'QEMU Copy On Write';
export const genericIconName = null;
export const aliasList = [];
export const subClassOfList = [];
export const magicList = [
  {
    priority: null,
    matchList: [
      {
        type: 'string',
        value: 'QFI',
        offset: '0',
        mask: null,
        matchList: [
          {
            type: 'byte',
            value: '0xfb',
            offset: '3',
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
const glob0 = '*.qcow2';
const glob1 = '*.qcow';

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
