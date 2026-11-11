/** The media type this record describes. */
export const mediaType = 'audio/aac';

export const commentList = ['AAC audio'];
export const acronym = 'AAC';
export const expandedAcronym = 'Advanced Audio Coding';
export const genericIconName = null;
export const aliasList = ['audio/x-aac'];
export const subClassOfList = [];
export const globList = [
  {
    pattern: '*.aac',
    weight: null,
    caseSensitive: false,
  },
  {
    pattern: '*.adts',
    weight: null,
    caseSensitive: false,
  },
  {
    pattern: '*.ass',
    weight: 10,
    caseSensitive: false,
  },
];
export const magicList = [
  {
    priority: null,
    matchList: [
      {
        type: 'string',
        value: 'ADIF',
        offset: '0',
        mask: null,
        matchList: [],
      },
      {
        type: 'big16',
        value: '0xFFF0',
        offset: '0',
        mask: '0xFFF6',
        matchList: [],
      },
    ],
  },
];
export const treeMagicList = [];
export const rootXmlList = [];
