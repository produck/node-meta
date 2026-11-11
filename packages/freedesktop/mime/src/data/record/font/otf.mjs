/** The media type this record describes. */
export const mediaType = 'font/otf';

export const commentList = ['OpenType font'];
export const acronym = null;
export const expandedAcronym = null;
export const genericIconName = null;
export const aliasList = ['application/x-font-otf'];
export const subClassOfList = ['font/ttf'];
export const globList = [
  {
    pattern: '*.otf',
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
        value: 'OTTO',
        offset: '0',
        mask: null,
        matchList: [],
      },
    ],
  },
];
export const treeMagicList = [];
export const rootXmlList = [];
