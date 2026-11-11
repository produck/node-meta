/** The media type this record describes. */
export const mediaType = 'application/vnd.rn-realmedia';

export const commentList = ['RealMedia document'];
export const acronym = null;
export const expandedAcronym = null;
export const genericIconName = 'video-x-generic';
export const aliasList = ['application/vnd.rn-realmedia-vbr'];
export const subClassOfList = [];
export const globList = [
  {
    pattern: '*.rm',
    weight: null,
    caseSensitive: false,
  },
  {
    pattern: '*.rmj',
    weight: null,
    caseSensitive: false,
  },
  {
    pattern: '*.rmm',
    weight: null,
    caseSensitive: false,
  },
  {
    pattern: '*.rms',
    weight: null,
    caseSensitive: false,
  },
  {
    pattern: '*.rmx',
    weight: null,
    caseSensitive: false,
  },
  {
    pattern: '*.rmvb',
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
        value: '.RMF',
        offset: '0',
        mask: null,
        matchList: [],
      },
    ],
  },
];
export const treeMagicList = [];
export const rootXmlList = [];
