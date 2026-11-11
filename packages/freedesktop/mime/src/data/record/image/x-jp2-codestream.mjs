/** The media type this record describes. */
export const mediaType = 'image/x-jp2-codestream';

export const commentList = ['JPEG-2000 codestream'];
export const acronym = null;
export const expandedAcronym = null;
export const genericIconName = null;
export const aliasList = [];
export const subClassOfList = [];
export const globList = [
  {
    pattern: '*.j2c',
    weight: null,
    caseSensitive: false,
  },
  {
    pattern: '*.j2k',
    weight: null,
    caseSensitive: false,
  },
  {
    pattern: '*.jpc',
    weight: null,
    caseSensitive: false,
  },
];
export const magicList = [
  {
    priority: null,
    matchList: [
      {
        type: 'big32',
        value: '0xff4fff51',
        offset: '0',
        mask: null,
        matchList: [],
      },
    ],
  },
];
export const treeMagicList = [];
export const rootXmlList = [];
