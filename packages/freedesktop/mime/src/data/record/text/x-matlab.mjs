/** The media type this record describes. */
export const mediaType = 'text/x-matlab';

export const commentList = ['MATLAB file'];
export const acronym = null;
export const expandedAcronym = null;
export const genericIconName = null;
export const aliasList = ['text/x-octave'];
export const subClassOfList = ['text/plain'];
export const globList = [
  {
    pattern: '*.m',
    weight: null,
    caseSensitive: false,
  },
];
export const magicList = [
  {
    priority: 10,
    matchList: [
      {
        type: 'string',
        value: '%',
        offset: '0',
        mask: null,
        matchList: [],
      },
      {
        type: 'string',
        value: 'function',
        offset: '0',
        mask: null,
        matchList: [],
      },
    ],
  },
];
export const treeMagicList = [];
export const rootXmlList = [];
