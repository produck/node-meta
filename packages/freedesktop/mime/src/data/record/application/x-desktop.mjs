/** The media type this record describes. */
export const mediaType = 'application/x-desktop';

export const commentList = ['Desktop entry'];
export const acronym = null;
export const expandedAcronym = null;
export const genericIconName = 'text-x-generic';
export const aliasList = ['application/x-gnome-app-info'];
export const subClassOfList = ['text/plain'];
export const magicList = [
  {
    priority: null,
    matchList: [
      {
        type: 'string',
        value: '[Desktop Entry]',
        offset: '0:32',
        mask: null,
        matchList: [],
      },
      {
        type: 'string',
        value: '[Desktop Action',
        offset: '0',
        mask: null,
        matchList: [],
      },
      {
        type: 'string',
        value: '[KDE Desktop Entry]',
        offset: '0',
        mask: null,
        matchList: [],
      },
      {
        type: 'string',
        value: '# Config File',
        offset: '0',
        mask: null,
        matchList: [],
      },
      {
        type: 'string',
        value: '# KDE Config File',
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
const glob0 = '*.desktop';
const glob1 = '*.kdelnk';

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
