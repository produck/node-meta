/** The media type this record describes. */
export const mediaType = 'audio/AMR-WB';

export const commentList = ['AMR-WB audio'];
export const acronym = 'AMR-WB';
export const expandedAcronym = 'Adaptive Multi-Rate Wideband';
export const genericIconName = null;
export const aliasList = ['audio/amr-wb-encrypted'];
export const subClassOfList = [];
export const globList = [
  {
    pattern: '*.awb',
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
        value: '#!AMR-WB\\n',
        offset: '0',
        mask: null,
        matchList: [],
      },
      {
        type: 'string',
        value: '#!AMR-WB_MC1.0\\n',
        offset: '0',
        mask: null,
        matchList: [],
      },
    ],
  },
];
export const treeMagicList = [];
export const rootXmlList = [];
