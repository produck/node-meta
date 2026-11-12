/** The media type this record describes. */
export const mediaType = 'audio/vnd.dts';

export const commentList = ['DTS audio'];
export const acronym = 'DTS';
export const expandedAcronym = 'Digital Theater Systems';
export const genericIconName = null;
export const aliasList = ['audio/x-dts'];
export const subClassOfList = [];
export const magicList = [
  {
    priority: null,
    matchList: [
      {
        type: 'big32',
        value: '0x7FFE8001',
        offset: '0',
        mask: null,
        matchList: [],
      },
      {
        type: 'little32',
        value: '0xFE7F0180',
        offset: '0',
        mask: null,
        matchList: [],
      },
      {
        type: 'big32',
        value: '0x1FFFE800',
        offset: '0',
        mask: null,
        matchList: [],
      },
      {
        type: 'little32',
        value: '0xFF1F00E8',
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
const glob0 = '*.dts';

export const globList = [
  {
    pattern: glob0,
    weight: null,
    caseSensitive: false,
  },
];

export const globPatternList = [glob0];
