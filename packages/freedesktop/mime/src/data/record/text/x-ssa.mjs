/** The media type this record describes. */
export const mediaType = 'text/x-ssa';

export const commentList = ['SSA subtitles'];
export const acronym = 'SSA';
export const expandedAcronym = 'SubStation Alpha';
export const genericIconName = null;
export const aliasList = [];
export const subClassOfList = ['text/plain'];
export const globList = [
  {
    pattern: '*.ssa',
    weight: null,
    caseSensitive: false,
  },
  {
    pattern: '*.ass',
    weight: null,
    caseSensitive: false,
  },
];
export const magicList = [
  {
    priority: null,
    matchList: [
      {
        type: 'string',
        value: '[Script Info]',
        offset: '0:256',
        mask: null,
        matchList: [],
      },
      {
        type: 'string',
        value: 'Dialogue: ',
        offset: '0:256',
        mask: null,
        matchList: [],
      },
    ],
  },
];
export const treeMagicList = [];
export const rootXmlList = [];
