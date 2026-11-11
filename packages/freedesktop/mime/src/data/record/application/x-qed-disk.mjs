/** The media type this record describes. */
export const mediaType = 'application/x-qed-disk';

export const commentList = ['QEMU QED disk image'];
export const acronym = 'QED';
export const expandedAcronym = 'QEMU Enhanced Disk';
export const genericIconName = null;
export const aliasList = [];
export const subClassOfList = [];
export const globList = [
  {
    pattern: '*.qed',
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
        value: 'QED\\0',
        offset: '0',
        mask: null,
        matchList: [],
      },
    ],
  },
];
export const treeMagicList = [];
export const rootXmlList = [];
