/** The media type this record describes. */
export const mediaType = 'application/vnd.ms-asf';

export const commentList = ['ASF video'];
export const acronym = 'ASF';
export const expandedAcronym = 'Advanced Streaming Format';
export const genericIconName = 'video-x-generic';
export const aliasList = [
  'video/x-ms-wm',
  'video/x-ms-asf',
  'video/x-ms-asf-plugin',
];
export const subClassOfList = [];
export const globList = [
  {
    pattern: '*.asf',
    weight: null,
    caseSensitive: false,
  },
];
export const magicList = [
  {
    priority: null,
    matchList: [
      {
        type: 'big32',
        value: '0x3026b275',
        offset: '0',
        mask: null,
        matchList: [],
      },
      {
        type: 'string',
        value: '[Reference]',
        offset: '0',
        mask: null,
        matchList: [],
      },
    ],
  },
];
export const treeMagicList = [];
export const rootXmlList = [];
