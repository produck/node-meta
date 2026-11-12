/** The media type this record describes. */
export const mediaType = 'audio/x-dsp';

export const commentList = ['Dynamic Studio module audio'];
export const acronym = null;
export const expandedAcronym = null;
export const genericIconName = null;
export const aliasList = [];
export const subClassOfList = [];
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

/** About glob */
const glob0 = '*.dsm';
const glob1 = '*.dsp';

export const globList = [
  {
    pattern: glob0,
    weight: null,
    caseSensitive: false,
  },
  {
    pattern: glob1,
    weight: 40,
    caseSensitive: false,
  },
];

export const globPatternList = [glob0, glob1];
