/** The media type this record describes. */
export const mediaType = 'application/vnd.adobe.flash.movie';

export const commentList = ['Shockwave Flash file'];
export const acronym = null;
export const expandedAcronym = null;
export const genericIconName = 'video-x-generic';
export const aliasList = [
  'application/x-shockwave-flash',
  'application/futuresplash',
];
export const subClassOfList = [];
export const globList = [
  {
    pattern: '*.swf',
    weight: null,
    caseSensitive: false,
  },
  {
    pattern: '*.spl',
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
        value: 'FWS',
        offset: '0',
        mask: null,
        matchList: [],
      },
      {
        type: 'string',
        value: 'CWS',
        offset: '0',
        mask: null,
        matchList: [],
      },
      {
        type: 'string',
        value: 'ZWS',
        offset: '0',
        mask: null,
        matchList: [],
      },
    ],
  },
];
export const treeMagicList = [];
export const rootXmlList = [];
