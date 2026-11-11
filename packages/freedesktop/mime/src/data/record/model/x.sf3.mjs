/** The media type this record describes. */
export const mediaType = 'model/x.sf3';

export const commentList = ['SF3 3D Model'];
export const acronym = 'SF3';
export const expandedAcronym = 'Simple File Format Family';
export const genericIconName = null;
export const aliasList = [];
export const subClassOfList = [];
export const globList = [
  {
    pattern: '*.mod.sf3',
    weight: null,
    caseSensitive: false,
  },
  {
    pattern: '*.sf3',
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
        value: '\\x81SF3\\x00\\xE0\\xD0\\x0D\\x0A\\x0A\\x05',
        offset: '0',
        mask: null,
        matchList: [],
      },
    ],
  },
];
export const treeMagicList = [];
export const rootXmlList = [];
