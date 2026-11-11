/** The media type this record describes. */
export const mediaType = 'audio/x-adpcm';

export const commentList = ['PCM audio'];
export const acronym = 'PCM';
export const expandedAcronym = 'Pulse-code Modulation';
export const genericIconName = null;
export const aliasList = [];
export const subClassOfList = [];
export const globList = [];
export const magicList = [
  {
    priority: null,
    matchList: [
      {
        type: 'string',
        value: '.snd',
        offset: '0',
        mask: null,
        matchList: [
          {
            type: 'big32',
            value: '23',
            offset: '12',
            mask: null,
            matchList: [],
          },
        ],
      },
      {
        type: 'little32',
        value: '0x0064732E',
        offset: '0',
        mask: null,
        matchList: [
          {
            type: 'little32',
            value: '1',
            offset: '12',
            mask: null,
            matchList: [],
          },
          {
            type: 'little32',
            value: '2',
            offset: '12',
            mask: null,
            matchList: [],
          },
          {
            type: 'little32',
            value: '3',
            offset: '12',
            mask: null,
            matchList: [],
          },
          {
            type: 'little32',
            value: '4',
            offset: '12',
            mask: null,
            matchList: [],
          },
          {
            type: 'little32',
            value: '5',
            offset: '12',
            mask: null,
            matchList: [],
          },
          {
            type: 'little32',
            value: '6',
            offset: '12',
            mask: null,
            matchList: [],
          },
          {
            type: 'little32',
            value: '7',
            offset: '12',
            mask: null,
            matchList: [],
          },
          {
            type: 'little32',
            value: '23',
            offset: '12',
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
