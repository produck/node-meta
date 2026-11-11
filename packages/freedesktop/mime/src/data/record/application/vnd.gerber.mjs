/** The media type this record describes. */
export const mediaType = 'application/vnd.gerber';

export const commentList = ['Gerber file'];
export const acronym = null;
export const expandedAcronym = null;
export const genericIconName = 'text-x-generic';
export const aliasList = ['application/x-gerber'];
export const subClassOfList = ['text/plain'];
export const globList = [
  {
    pattern: '*.gbr',
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
        value: 'G04 ',
        offset: '0',
        mask: null,
        matchList: [],
      },
      {
        type: 'string',
        value: '%FSLA',
        offset: '0',
        mask: null,
        matchList: [],
      },
      {
        type: 'string',
        value: '%MO',
        offset: '0',
        mask: null,
        matchList: [],
      },
      {
        type: 'string',
        value: '%TF.',
        offset: '0',
        mask: null,
        matchList: [],
      },
      {
        type: 'string',
        value: 'G75*',
        offset: '0',
        mask: null,
        matchList: [],
      },
    ],
  },
];
export const treeMagicList = [];
export const rootXmlList = [];
