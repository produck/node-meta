/** The media type this record describes. */
export const mediaType = 'application/x-mswinurl';

export const commentList = ['Internet shortcut'];
export const acronym = null;
export const expandedAcronym = null;
export const genericIconName = 'emblem-symbolic-link';
export const aliasList = [];
export const subClassOfList = ['text/plain'];
export const magicList = [
  {
    priority: null,
    matchList: [
      {
        type: 'string',
        value: 'InternetShortcut',
        offset: '1',
        mask: null,
        matchList: [],
      },
      {
        type: 'string',
        value: 'DEFAULT',
        offset: '1',
        mask: null,
        matchList: [
          {
            type: 'string',
            value: 'BASEURL=',
            offset: '11',
            mask: null,
            matchList: [],
          },
        ],
      },
    ],
  },
];
export const treeMagicList = [];
export const rootXmlList = [];

/** About glob */
const glob0 = '*.url';

export const globList = [
  {
    pattern: glob0,
    weight: null,
    caseSensitive: false,
  },
];

export const globPatternList = [glob0];
