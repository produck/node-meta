/** The media type this record describes. */
export const mediaType = 'application/x-sv4crc';

export const commentList = ['SV4 CPIO archive (with CRC)'];
export const acronym = null;
export const expandedAcronym = null;
export const genericIconName = 'package-x-generic';
export const aliasList = [];
export const subClassOfList = ['application/x-cpio'];
export const globList = [
  {
    pattern: '*.sv4crc',
    weight: null,
    caseSensitive: false,
  },
  {
    pattern: '*.cpio',
    weight: 40,
    caseSensitive: false,
  },
];
export const magicList = [
  {
    priority: 60,
    matchList: [
      {
        type: 'string',
        value: '070702',
        offset: '0',
        mask: null,
        matchList: [
          {
            type: 'string',
            value: '00000000',
            offset: '14',
            mask: '0xffffffff80808080',
            matchList: [],
          },
        ],
      },
    ],
  },
];
export const treeMagicList = [];
export const rootXmlList = [];
