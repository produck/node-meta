/** The media type this record describes. */
export const mediaType = 'application/x-raw-disk-image-xz-compressed';

export const commentList = ['Raw disk image (XZ-compressed)'];
export const acronym = null;
export const expandedAcronym = null;
export const genericIconName = null;
export const aliasList = [];
export const subClassOfList = ['application/x-xz'];
export const magicList = [];
export const treeMagicList = [];
export const rootXmlList = [];

/** About glob */
const glob0 = '*.raw-disk-image.xz';
const glob1 = '*.img.xz';

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
