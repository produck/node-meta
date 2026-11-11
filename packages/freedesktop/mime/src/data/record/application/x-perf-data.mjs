/** The media type this record describes. */
export const mediaType = 'application/x-perf-data';

export const commentList = ['Perf data'];
export const acronym = null;
export const expandedAcronym = null;
export const genericIconName = null;
export const aliasList = [];
export const subClassOfList = [];
export const globList = [
  {
    pattern: 'perf.data',
    weight: null,
    caseSensitive: true,
  },
];
export const magicList = [
  {
    priority: 50,
    matchList: [
      {
        type: 'string',
        value: 'PERFILE2',
        offset: '0',
        mask: null,
        matchList: [],
      },
    ],
  },
];
export const treeMagicList = [];
export const rootXmlList = [];
