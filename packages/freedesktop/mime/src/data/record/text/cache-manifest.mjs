/** The media type this record describes. */
export const mediaType = 'text/cache-manifest';

export const commentList = ['Web application cache file'];
export const acronym = null;
export const expandedAcronym = null;
export const genericIconName = null;
export const aliasList = [];
export const subClassOfList = ['text/plain'];
export const magicList = [
  {
    priority: null,
    matchList: [
      {
        type: 'string',
        value: 'CACHE MANIFEST',
        offset: '0',
        mask: null,
        matchList: [
          {
            type: 'string',
            value: '\\x20',
            offset: '14',
            mask: null,
            matchList: [],
          },
          {
            type: 'string',
            value: '\\x09',
            offset: '14',
            mask: null,
            matchList: [],
          },
          {
            type: 'string',
            value: '\\x0a',
            offset: '14',
            mask: null,
            matchList: [],
          },
          {
            type: 'string',
            value: '\\x0d',
            offset: '14',
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
const glob0 = '*.manifest';

export const globList = [
  {
    pattern: glob0,
    weight: null,
    caseSensitive: false,
  },
];

export const globPatternList = [glob0];
