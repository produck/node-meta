/** The media type this record describes. */
export const mediaType = 'application/vnd.flatpak';

export const commentList = ['Flatpak application bundle'];
export const acronym = null;
export const expandedAcronym = null;
export const genericIconName = 'package-x-generic';
export const aliasList = ['application/vnd.xdgapp'];
export const subClassOfList = [];
export const magicList = [
  {
    priority: null,
    matchList: [
      {
        type: 'string',
        value: 'xdg-app\\x00\\x01\\x00\\x89\\xe5',
        offset: '0',
        mask: null,
        matchList: [],
      },
      {
        type: 'string',
        value: 'flatpak\\x00\\x01\\x00\\x89\\xe5',
        offset: '0',
        mask: null,
        matchList: [],
      },
    ],
  },
];
export const treeMagicList = [];
export const rootXmlList = [];

/** About glob */
const glob0 = '*.flatpak';
const glob1 = '*.xdgapp';

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
