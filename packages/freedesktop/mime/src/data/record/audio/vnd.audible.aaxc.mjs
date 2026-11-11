/** The media type this record describes. */
export const mediaType = 'audio/vnd.audible.aaxc';

export const commentList = ['Audible Enhanced audio'];
export const acronym = null;
export const expandedAcronym = null;
export const genericIconName = null;
export const aliasList = [];
export const subClassOfList = [];
export const globList = [
  {
    pattern: '*.aaxc',
    weight: null,
    caseSensitive: false,
  },
];
export const magicList = [
  {
    priority: 50,
    matchList: [
      {
        type: 'string',
        value: 'ftypaaxc',
        offset: '4',
        mask: null,
        matchList: [],
      },
    ],
  },
];
export const treeMagicList = [];
export const rootXmlList = [];
