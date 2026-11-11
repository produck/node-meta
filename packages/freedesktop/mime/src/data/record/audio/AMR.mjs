/** The media type this record describes. */
export const mediaType = 'audio/AMR';

export const commentList = ['AMR audio'];
export const acronym = 'AMR';
export const expandedAcronym = 'Adaptive Multi-Rate';
export const genericIconName = null;
export const aliasList = ['audio/amr-encrypted'];
export const subClassOfList = [];
export const globList = [
  {
    pattern: '*.amr',
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
        value: '#!AMR\\n',
        offset: '0',
        mask: null,
        matchList: [],
      },
      {
        type: 'string',
        value: '#!AMR_MC1.0\\n',
        offset: '0',
        mask: null,
        matchList: [],
      },
    ],
  },
];
export const treeMagicList = [];
export const rootXmlList = [];
