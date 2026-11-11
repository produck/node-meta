/** The media type this record describes. */
export const mediaType = 'application/x-font-pcf';

export const commentList = ['PCF font'];
export const acronym = 'PCF';
export const expandedAcronym = 'Portable Compiled Format';
export const genericIconName = 'font-x-generic';
export const aliasList = [];
export const subClassOfList = [];
export const globList = [
  {
    pattern: '*.pcf',
    weight: null,
    caseSensitive: false,
  },
  {
    pattern: '*.pcf.Z',
    weight: null,
    caseSensitive: false,
  },
  {
    pattern: '*.pcf.gz',
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
        value: '\\001fcp',
        offset: '0',
        mask: null,
        matchList: [],
      },
    ],
  },
];
export const treeMagicList = [];
export const rootXmlList = [];
