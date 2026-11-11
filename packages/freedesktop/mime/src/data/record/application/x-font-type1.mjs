/** The media type this record describes. */
export const mediaType = 'application/x-font-type1';

export const commentList = ['PostScript type-1 font'];
export const acronym = null;
export const expandedAcronym = null;
export const genericIconName = 'font-x-generic';
export const aliasList = [];
export const subClassOfList = ['application/postscript'];
export const globList = [
  {
    pattern: '*.pfa',
    weight: null,
    caseSensitive: false,
  },
  {
    pattern: '*.pfb',
    weight: null,
    caseSensitive: false,
  },
  {
    pattern: '*.gsf',
    weight: null,
    caseSensitive: false,
  },
];
export const magicList = [
  {
    priority: 60,
    matchList: [
      {
        type: 'string',
        value: 'LWFN',
        offset: '0',
        mask: null,
        matchList: [],
      },
      {
        type: 'string',
        value: 'LWFN',
        offset: '65',
        mask: null,
        matchList: [],
      },
      {
        type: 'string',
        value: '%!PS-AdobeFont-1.',
        offset: '0',
        mask: null,
        matchList: [],
      },
      {
        type: 'string',
        value: '%!PS-AdobeFont-1.',
        offset: '6',
        mask: null,
        matchList: [],
      },
      {
        type: 'string',
        value: '%!FontType1-1.',
        offset: '0',
        mask: null,
        matchList: [],
      },
      {
        type: 'string',
        value: '%!FontType1-1.',
        offset: '6',
        mask: null,
        matchList: [],
      },
    ],
  },
];
export const treeMagicList = [];
export const rootXmlList = [];
