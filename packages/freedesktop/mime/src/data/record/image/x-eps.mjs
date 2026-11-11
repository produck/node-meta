/** The media type this record describes. */
export const mediaType = 'image/x-eps';

export const commentList = ['EPS image'];
export const acronym = 'EPS';
export const expandedAcronym = 'Encapsulated PostScript';
export const genericIconName = null;
export const aliasList = [];
export const subClassOfList = ['application/postscript'];
export const globList = [
  {
    pattern: '*.eps',
    weight: null,
    caseSensitive: false,
  },
  {
    pattern: '*.epsi',
    weight: null,
    caseSensitive: false,
  },
  {
    pattern: '*.epsf',
    weight: null,
    caseSensitive: false,
  },
];
export const magicList = [
  {
    priority: 90,
    matchList: [
      {
        type: 'string',
        value: '%!',
        offset: '0',
        mask: null,
        matchList: [
          {
            type: 'string',
            value: 'EPS',
            offset: '15',
            mask: null,
            matchList: [],
          },
        ],
      },
      {
        type: 'string',
        value: '\\004%!',
        offset: '0',
        mask: null,
        matchList: [
          {
            type: 'string',
            value: 'EPS',
            offset: '16',
            mask: null,
            matchList: [],
          },
        ],
      },
      {
        type: 'big32',
        value: '0xC5D0D3C6',
        offset: '0',
        mask: null,
        matchList: [],
      },
    ],
  },
];
export const treeMagicList = [];
export const rootXmlList = [];
