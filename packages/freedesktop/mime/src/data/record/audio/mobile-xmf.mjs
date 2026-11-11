/** The media type this record describes. */
export const mediaType = 'audio/mobile-xmf';

export const commentList = ['Mobile XMF audio'];
export const acronym = 'XMF';
export const expandedAcronym = 'eXtensible Music Format';
export const genericIconName = null;
export const aliasList = ['audio/vnd.nokia.mobile-xmf'];
export const subClassOfList = [];
export const globList = [
  {
    pattern: '*.mxmf',
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
        value: '\\130\\115\\106\\137\\062\\056\\060\\060\\000\\000\\000\\002',
        offset: '0',
        mask: null,
        matchList: [],
      },
    ],
  },
];
export const treeMagicList = [];
export const rootXmlList = [];
