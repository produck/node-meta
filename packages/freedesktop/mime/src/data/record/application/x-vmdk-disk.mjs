/** The media type this record describes. */
export const mediaType = 'application/x-vmdk-disk';

export const commentList = ['VMDK disk image'];
export const acronym = 'VMDK';
export const expandedAcronym = 'Virtual Machine Disk';
export const genericIconName = null;
export const aliasList = ['application/x-virtualbox-vmdk'];
export const subClassOfList = [];
export const globList = [
  {
    pattern: '*.vmdk',
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
        value: 'KDMV\\x01\\x00\\x00\\x00',
        offset: '0',
        mask: null,
        matchList: [],
      },
      {
        type: 'string',
        value: 'KDMV\\x02\\x00\\x00\\x00',
        offset: '0',
        mask: null,
        matchList: [],
      },
    ],
  },
];
export const treeMagicList = [];
export const rootXmlList = [];
