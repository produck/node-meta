/** The media type this record describes. */
export const mediaType = 'image/x-phm';

export const commentList = ['Portable HalfMap'];
export const acronym = null;
export const expandedAcronym = null;
export const genericIconName = null;
export const aliasList = [];
export const subClassOfList = [];
export const globList = [
  {
    pattern: '*.phm',
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
        value: 'PH\\n',
        offset: '0',
        mask: null,
        matchList: [],
      },
      {
        type: 'string',
        value: 'Ph\\n',
        offset: '0',
        mask: null,
        matchList: [],
      },
    ],
  },
];
export const treeMagicList = [];
export const rootXmlList = [];
