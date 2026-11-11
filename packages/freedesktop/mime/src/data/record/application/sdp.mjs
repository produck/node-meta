/** The media type this record describes. */
export const mediaType = 'application/sdp';

export const commentList = ['SDP multicast stream file'];
export const acronym = 'SDP';
export const expandedAcronym = 'Session Description Protocol';
export const genericIconName = 'video-x-generic';
export const aliasList = ['application/x-sdp', 'application/vnd.sdp'];
export const subClassOfList = ['text/plain'];
export const globList = [
  {
    pattern: '*.sdp',
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
        value: 'v=',
        offset: '0',
        mask: null,
        matchList: [
          {
            type: 'string',
            value: 's=',
            offset: '0:256',
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
