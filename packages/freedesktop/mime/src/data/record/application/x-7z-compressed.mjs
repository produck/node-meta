/** The media type this record describes. */
export const mediaType = 'application/x-7z-compressed';

export const commentList = ['7-zip archive'];
export const acronym = null;
export const expandedAcronym = null;
export const genericIconName = 'package-x-generic';
export const aliasList = [];
export const subClassOfList = [];
export const globList = [
  {
    pattern: '*.7z',
    weight: null,
    caseSensitive: false,
  },
  {
    pattern: '*.7z.001',
    weight: null,
    caseSensitive: false,
  },
];
export const magicList = [
  {
    priority: 60,
    matchList: [
      {
        type: 'string',
        value: '7z\\274\\257\\047\\034',
        offset: '0',
        mask: null,
        matchList: [],
      },
    ],
  },
];
export const treeMagicList = [];
export const rootXmlList = [];
