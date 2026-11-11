/** The media type this record describes. */
export const mediaType = 'video/x-javafx';

export const commentList = ['JavaFX video'];
export const acronym = null;
export const expandedAcronym = null;
export const genericIconName = null;
export const aliasList = [];
export const subClassOfList = ['video/x-flv'];
export const globList = [
  {
    pattern: '*.fxm',
    weight: null,
    caseSensitive: false,
  },
];
export const magicList = [
  {
    priority: 40,
    matchList: [
      {
        type: 'string',
        value: 'FLV',
        offset: '0',
        mask: null,
        matchList: [],
      },
    ],
  },
];
export const treeMagicList = [];
export const rootXmlList = [];
