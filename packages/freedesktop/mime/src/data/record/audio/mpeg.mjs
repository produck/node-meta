/** The media type this record describes. */
export const mediaType = 'audio/mpeg';

export const commentList = ['MP3 audio'];
export const acronym = null;
export const expandedAcronym = null;
export const genericIconName = null;
export const aliasList = [
  'audio/x-mp3',
  'audio/x-mpg',
  'audio/x-mpeg',
  'audio/mp3',
];
export const subClassOfList = [];
export const globList = [
  {
    pattern: '*.mp3',
    weight: null,
    caseSensitive: false,
  },
  {
    pattern: '*.mpga',
    weight: null,
    caseSensitive: false,
  },
];
export const magicList = [
  {
    priority: null,
    matchList: [
      {
        type: 'big16',
        value: '0xfffa',
        offset: '0',
        mask: null,
        matchList: [],
      },
      {
        type: 'big16',
        value: '0xfffb',
        offset: '0',
        mask: null,
        matchList: [],
      },
      {
        type: 'big16',
        value: '0xfff3',
        offset: '0',
        mask: null,
        matchList: [],
      },
      {
        type: 'big16',
        value: '0xfff2',
        offset: '0',
        mask: null,
        matchList: [],
      },
      {
        type: 'big16',
        value: '0xffe3',
        offset: '0',
        mask: null,
        matchList: [],
      },
      {
        type: 'big16',
        value: '0xffe2',
        offset: '0',
        mask: null,
        matchList: [],
      },
      {
        type: 'string',
        value: 'ID3',
        offset: '0',
        mask: null,
        matchList: [],
      },
    ],
  },
];
export const treeMagicList = [];
export const rootXmlList = [];
