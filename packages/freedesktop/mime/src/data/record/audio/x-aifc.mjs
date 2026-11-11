/** The media type this record describes. */
export const mediaType = 'audio/x-aifc';

export const commentList = ['AIFC audio'];
export const acronym = 'AIFC';
export const expandedAcronym = 'Audio Interchange File format Compressed';
export const genericIconName = null;
export const aliasList = ['audio/x-aiffc'];
export const subClassOfList = ['application/x-iff'];
export const globList = [
  {
    pattern: '*.aifc',
    weight: null,
    caseSensitive: false,
  },
  {
    pattern: '*.aiffc',
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
        value: 'AIFC',
        offset: '8',
        mask: null,
        matchList: [],
      },
    ],
  },
];
export const treeMagicList = [];
export const rootXmlList = [];
