/** The media type this record describes. */
export const mediaType = 'application/x-raw-floppy-disk-image';

export const commentList = ['Floppy disk image'];
export const acronym = null;
export const expandedAcronym = null;
export const genericIconName = 'media-floppy';
export const aliasList = ['application/x-fd-file'];
export const subClassOfList = ['application/vnd.efi.img'];
export const magicList = [];
export const treeMagicList = [];
export const rootXmlList = [];

/** About glob */
const glob0 = '*.fd';
const glob1 = '*.qd';

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
