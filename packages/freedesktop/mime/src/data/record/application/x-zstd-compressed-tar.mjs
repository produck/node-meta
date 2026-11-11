/** The media type this record describes. */
export const mediaType = 'application/x-zstd-compressed-tar';

export const commentList = ['Tar archive (Zstandard-compressed)'];
export const acronym = null;
export const expandedAcronym = null;
export const genericIconName = 'package-x-generic';
export const aliasList = [];
export const subClassOfList = ['application/zstd'];
export const globList = [
  {
    pattern: '*.tar.zst',
    weight: null,
    caseSensitive: false,
  },
  {
    pattern: '*.tzst',
    weight: null,
    caseSensitive: false,
  },
];
export const magicList = [];
export const treeMagicList = [];
export const rootXmlList = [];
