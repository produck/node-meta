/** The media type this record describes. */
export const mediaType = 'application/fits';

export const commentList = ['FITS document'];
export const acronym = 'FITS';
export const expandedAcronym = 'Flexible Image Transport System';
export const genericIconName = null;
export const aliasList = ['image/x-fits', 'image/fits'];
export const subClassOfList = [];
export const globList = [
  {
    pattern: '*.fits',
    weight: null,
    caseSensitive: false,
  },
  {
    pattern: '*.fit',
    weight: null,
    caseSensitive: false,
  },
  {
    pattern: '*.fts',
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
        value: 'SIMPLE  =',
        offset: '0',
        mask: null,
        matchList: [],
      },
    ],
  },
];
export const treeMagicList = [];
export const rootXmlList = [];
