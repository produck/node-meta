/** The media type this record describes. */
export const mediaType = 'application/x-desktop';

export const commentList = ['Desktop entry'];
export const acronym = null;
export const expandedAcronym = null;
export const genericIconName = 'text-x-generic';
export const aliasList = ['application/x-gnome-app-info'];
export const subClassOfList = ['text/plain'];
export const globList = [
  {
    pattern: '*.desktop',
    weight: null,
    caseSensitive: false,
  },
  {
    pattern: '*.kdelnk',
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
