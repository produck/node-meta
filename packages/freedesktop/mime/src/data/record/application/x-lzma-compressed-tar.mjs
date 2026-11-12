/** The media type this record describes. */
export const mediaType = 'application/x-lzma-compressed-tar';

export const commentList = ['Tar archive (LZMA-compressed)'];
export const acronym = null;
export const expandedAcronym = null;
export const genericIconName = 'package-x-generic';
export const aliasList = [];
export const subClassOfList = ['application/x-lzma'];
export const magicList = [];
export const treeMagicList = [];
export const rootXmlList = [];

/** About glob */
const glob0 = '*.tar.lzma';
const glob1 = '*.tlz';

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
