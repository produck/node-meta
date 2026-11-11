/** The media type this record describes. */
export const mediaType = 'application/x-archive';

export const commentList = ['AR archive'];
export const acronym = null;
export const expandedAcronym = null;
export const genericIconName = 'package-x-generic';
export const aliasList = [];
export const subClassOfList = [];
export const globList = [
  {
    pattern: '*.a',
    weight: null,
    caseSensitive: false,
  },
  {
    pattern: '*.ar',
    weight: null,
    caseSensitive: false,
  },
  {
    pattern: '*.lib',
    weight: null,
    caseSensitive: false,
  },
];
export const magicList = [
  {
    priority: 45,
    matchList: [
      {
        type: 'string',
        value: '<ar>',
        offset: '0',
        mask: null,
        matchList: [],
      },
      {
        type: 'string',
        value: '!<arch>',
        offset: '0',
        mask: null,
        matchList: [],
      },
    ],
  },
];
export const treeMagicList = [];
export const rootXmlList = [];
