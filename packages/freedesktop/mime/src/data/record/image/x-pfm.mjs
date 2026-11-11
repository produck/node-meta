/** The media type this record describes. */
export const mediaType = 'image/x-pfm';

export const commentList = ['Portable FloatMap'];
export const acronym = null;
export const expandedAcronym = null;
export const genericIconName = null;
export const aliasList = [];
export const subClassOfList = [];
export const globList = [
  {
    pattern: '*.pfm',
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
        value: 'PF\\n',
        offset: '0',
        mask: null,
        matchList: [],
      },
      {
        type: 'string',
        value: 'Pf\\n',
        offset: '0',
        mask: null,
        matchList: [],
      },
    ],
  },
];
export const treeMagicList = [];
export const rootXmlList = [];
