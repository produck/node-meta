/** The media type this record describes. */
export const mediaType = 'audio/x-dsp';

export const commentList = ['Dynamic Studio module audio'];
export const acronym = null;
export const expandedAcronym = null;
export const genericIconName = null;
export const aliasList = [];
export const subClassOfList = [];
export const globList = [
  {
    pattern: '*.dsm',
    weight: null,
    caseSensitive: false,
  },
  {
    pattern: '*.dsp',
    weight: 40,
    caseSensitive: false,
  },
];
export const magicList = [
  {
    priority: null,
    matchList: [
      {
        type: 'string',
        value: 'DSm\\x1A\\x20',
        offset: '0',
        mask: null,
        matchList: [
          {
            type: 'byte',
            value: '0x0',
            offset: '45',
            mask: '0xf0',
            matchList: [],
          },
          {
            type: 'byte',
            value: '0x10',
            offset: '45',
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
