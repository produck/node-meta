/** The media type this record describes. */
export const mediaType = 'application/x-nintendo-3ds-rom';

export const commentList = ['Nintendo 3DS ROM'];
export const acronym = null;
export const expandedAcronym = null;
export const genericIconName = 'application-x-executable';
export const aliasList = [];
export const subClassOfList = [];
export const globList = [
  {
    pattern: '*.3ds',
    weight: null,
    caseSensitive: false,
  },
  {
    pattern: '*.cci',
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
        value: 'NCSD',
        offset: '256',
        mask: null,
        matchList: [],
      },
    ],
  },
];
export const treeMagicList = [];
export const rootXmlList = [];
