/** The media type this record describes. */
export const mediaType = 'audio/x-xmf';

export const commentList = ['XMF audio'];
export const acronym = 'XMF';
export const expandedAcronym = 'eXtensible Music Format';
export const genericIconName = null;
export const aliasList = ['audio/xmf'];
export const subClassOfList = [];
export const globList = [
  {
    pattern: '*.xmf',
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
        value: 'XMF_',
        offset: '0',
        mask: null,
        matchList: [],
      },
    ],
  },
];
export const treeMagicList = [];
export const rootXmlList = [];
