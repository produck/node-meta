/** The media type this record describes. */
export const mediaType = 'image/x.sf3';

export const commentList = ['SF3 Image'];
export const acronym = 'SF3';
export const expandedAcronym = 'Simple File Format Family';
export const genericIconName = null;
export const aliasList = [];
export const subClassOfList = [];
export const globList = [
  {
    pattern: '*.img.sf3',
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
        value: '\\x81SF3\\x00\\xE0\\xD0\\x0D\\x0A\\x0A\\x03',
        offset: '0',
        mask: null,
        matchList: [],
      },
    ],
  },
];
export const treeMagicList = [];
export const rootXmlList = [];
