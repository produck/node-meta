/** The media type this record describes. */
export const mediaType = 'application/x-starmail';

export const commentList = ['StarMail 4 email'];
export const acronym = null;
export const expandedAcronym = null;
export const genericIconName = 'emblem-mail';
export const aliasList = [];
export const subClassOfList = [];
export const globList = [
  {
    pattern: '*.smd',
    weight: 10,
    caseSensitive: false,
  },
];
export const magicList = [
  {
    priority: null,
    matchList: [
      {
        type: 'string',
        value: 'ANCH',
        offset: '0',
        mask: null,
        matchList: [],
      },
    ],
  },
];
export const treeMagicList = [];
export const rootXmlList = [];
