/** The media type this record describes. */
export const mediaType = 'video/vnd.mpegurl';

export const commentList = ['Video playlist'];
export const acronym = null;
export const expandedAcronym = null;
export const genericIconName = null;
export const aliasList = ['video/x-mpegurl'];
export const subClassOfList = ['text/plain'];
export const globList = [
  {
    pattern: '*.m1u',
    weight: null,
    caseSensitive: false,
  },
  {
    pattern: '*.m4u',
    weight: null,
    caseSensitive: false,
  },
  {
    pattern: '*.mxu',
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
        value: '#EXTM4U',
        offset: '0',
        mask: null,
        matchList: [],
      },
    ],
  },
];
export const treeMagicList = [];
export const rootXmlList = [];
