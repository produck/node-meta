/** The media type this record describes. */
export const mediaType = 'audio/vnd.dts.hd';

export const commentList = ['DTS-HD audio'];
export const acronym = 'DTS-HD';
export const expandedAcronym = 'Digital Theater Systems High Definition';
export const genericIconName = null;
export const aliasList = ['audio/x-dtshd'];
export const subClassOfList = ['audio/vnd.dts'];
export const globList = [
  {
    pattern: '*.dtshd',
    weight: null,
    caseSensitive: false,
  },
];
export const magicList = [
  {
    priority: 60,
    matchList: [
      {
        type: 'big32',
        value: '0x7FFE8001',
        offset: '0',
        mask: null,
        matchList: [
          {
            type: 'big32',
            value: '0x64582025',
            offset: '4:18725',
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
