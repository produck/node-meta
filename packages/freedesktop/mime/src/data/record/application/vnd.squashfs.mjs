/** The media type this record describes. */
export const mediaType = 'application/vnd.squashfs';

export const commentList = ['Squashfs filesystem image'];
export const acronym = null;
export const expandedAcronym = null;
export const genericIconName = null;
export const aliasList = [];
export const subClassOfList = ['application/vnd.efi.img'];
export const globList = [
  {
    pattern: '*.sfs',
    weight: null,
    caseSensitive: false,
  },
  {
    pattern: '*.sqfs',
    weight: null,
    caseSensitive: false,
  },
  {
    pattern: '*.sqsh',
    weight: null,
    caseSensitive: false,
  },
  {
    pattern: '*.squashfs',
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
        value: 'hsqs',
        offset: '0',
        mask: null,
        matchList: [],
      },
    ],
  },
];
export const treeMagicList = [];
export const rootXmlList = [];
