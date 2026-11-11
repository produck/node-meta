/** The media type this record describes. */
export const mediaType = 'text/plain';

export const commentList = ['Plain text document'];
export const acronym = null;
export const expandedAcronym = null;
export const genericIconName = null;
export const aliasList = [];
export const subClassOfList = [];
export const globList = [
  {
    pattern: '*.txt',
    weight: null,
    caseSensitive: false,
  },
  {
    pattern: '*.asc',
    weight: null,
    caseSensitive: false,
  },
  {
    pattern: '*,v',
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
        value: 'This is TeX,',
        offset: '0',
        mask: null,
        matchList: [],
      },
      {
        type: 'string',
        value: 'This is METAFONT,',
        offset: '0',
        mask: null,
        matchList: [],
      },
    ],
  },
];
export const treeMagicList = [];
export const rootXmlList = [];
