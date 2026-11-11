/** The media type this record describes. */
export const mediaType = 'image/x-sct';

export const commentList = ['Scitex CT'];
export const acronym = 'CT';
export const expandedAcronym = 'Continuous Tone';
export const genericIconName = null;
export const aliasList = [];
export const subClassOfList = [];
export const globList = [
  {
    pattern: '*.sct',
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
        value: 'CT',
        offset: '80',
        mask: null,
        matchList: [],
      },
    ],
  },
];
export const treeMagicList = [];
export const rootXmlList = [];
