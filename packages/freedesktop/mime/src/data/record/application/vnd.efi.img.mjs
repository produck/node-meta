/** The media type this record describes. */
export const mediaType = 'application/vnd.efi.img';

export const commentList = ['Raw disk image'];
export const acronym = null;
export const expandedAcronym = null;
export const genericIconName = null;
export const aliasList = ['application/x-raw-disk-image'];
export const subClassOfList = [];
export const globList = [
  {
    pattern: '*.raw-disk-image',
    weight: null,
    caseSensitive: false,
  },
  {
    pattern: '*.img',
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
        value: 'EFI PART',
        offset: '512',
        mask: null,
        matchList: [],
      },
      {
        type: 'string',
        value: 'EFI PART',
        offset: '1024',
        mask: null,
        matchList: [],
      },
      {
        type: 'string',
        value: 'EFI PART',
        offset: '2048',
        mask: null,
        matchList: [],
      },
      {
        type: 'string',
        value: 'EFI PART',
        offset: '4096',
        mask: null,
        matchList: [],
      },
    ],
  },
];
export const treeMagicList = [];
export const rootXmlList = [];
