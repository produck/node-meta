/** The media type this record describes. */
export const mediaType = 'application/vnd.iccprofile';

export const commentList = ['ICC profile'];
export const acronym = 'ICC';
export const expandedAcronym = 'International Color Consortium';
export const genericIconName = null;
export const aliasList = [];
export const subClassOfList = [];
export const globList = [
  {
    pattern: '*.icc',
    weight: null,
    caseSensitive: false,
  },
  {
    pattern: '*.icm',
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
        value: 'acsp',
        offset: '36',
        mask: null,
        matchList: [],
      },
    ],
  },
];
export const treeMagicList = [];
export const rootXmlList = [];
