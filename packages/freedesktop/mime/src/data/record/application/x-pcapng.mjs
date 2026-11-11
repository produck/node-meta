/** The media type this record describes. */
export const mediaType = 'application/x-pcapng';

export const commentList = ['PCAPNG packet capture'];
export const acronym = 'PCAPNG';
export const expandedAcronym = 'PCAP Next Generation';
export const genericIconName = null;
export const aliasList = [];
export const subClassOfList = [];
export const globList = [
  {
    pattern: '*.pcapng',
    weight: null,
    caseSensitive: false,
  },
  {
    pattern: '*.scap',
    weight: null,
    caseSensitive: false,
  },
  {
    pattern: '*.ntar',
    weight: null,
    caseSensitive: false,
  },
];
export const magicList = [
  {
    priority: null,
    matchList: [
      {
        type: 'host32',
        value: '0x0a0d0d0a',
        offset: '0',
        mask: null,
        matchList: [
          {
            type: 'host32',
            value: '0x1a2b3c4d',
            offset: '8',
            mask: null,
            matchList: [],
          },
          {
            type: 'host32',
            value: '0x4d3c2b1a',
            offset: '8',
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
