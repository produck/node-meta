/** The media type this record describes. */
export const mediaType = 'application/vnd.efi.iso';

export const commentList = ['Raw CD image'];
export const acronym = null;
export const expandedAcronym = null;
export const genericIconName = 'media-optical';
export const aliasList = [
  'application/x-cd-image',
  'application/x-iso9660-image',
];
export const subClassOfList = ['application/vnd.efi.img'];
export const globList = [
  {
    pattern: '*.iso',
    weight: 80,
    caseSensitive: false,
  },
  {
    pattern: '*.iso9660',
    weight: null,
    caseSensitive: false,
  },
];
export const magicList = [];
export const treeMagicList = [];
export const rootXmlList = [];
