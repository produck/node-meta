/** The media type this record describes. */
export const mediaType = 'application/vnd.tcpdump.pcap';

export const commentList = ['Network packet capture'];
export const acronym = null;
export const expandedAcronym = null;
export const genericIconName = null;
export const aliasList = ['application/x-pcap', 'application/pcap'];
export const subClassOfList = [];
export const magicList = [
  {
    priority: null,
    matchList: [
      {
        type: 'host32',
        value: '0xa1b2c3d4',
        offset: '0',
        mask: null,
        matchList: [],
      },
      {
        type: 'host32',
        value: '0xd4c3b2a1',
        offset: '0',
        mask: null,
        matchList: [],
      },
    ],
  },
];
export const treeMagicList = [];
export const rootXmlList = [];

/** About glob */
const glob0 = '*.pcap';
const glob1 = '*.cap';
const glob2 = '*.dmp';

export const globList = [
  {
    pattern: glob0,
    weight: null,
    caseSensitive: false,
  },
  {
    pattern: glob1,
    weight: null,
    caseSensitive: false,
  },
  {
    pattern: glob2,
    weight: null,
    caseSensitive: false,
  },
];

export const globPatternList = [glob0, glob1, glob2];
