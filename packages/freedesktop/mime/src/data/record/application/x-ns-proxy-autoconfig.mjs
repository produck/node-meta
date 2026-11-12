/** The media type this record describes. */
export const mediaType = 'application/x-ns-proxy-autoconfig';

export const commentList = ['Proxy Auto-Configuration file'];
export const acronym = null;
export const expandedAcronym = null;
export const genericIconName = 'text-x-script';
export const aliasList = [];
export const subClassOfList = ['text/javascript'];
export const magicList = [
  {
    priority: null,
    matchList: [
      {
        type: 'string',
        value: 'function FindProxyForURL',
        offset: '0:3000',
        mask: null,
        matchList: [],
      },
    ],
  },
];
export const treeMagicList = [];
export const rootXmlList = [];

/** About glob */
const glob0 = '*.pac';

export const globList = [
  {
    pattern: glob0,
    weight: null,
    caseSensitive: false,
  },
];

export const globPatternList = [glob0];
