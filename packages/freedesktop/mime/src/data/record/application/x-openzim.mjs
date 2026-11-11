/** The media type this record describes. */
export const mediaType = 'application/x-openzim';

export const commentList = ['OpenZIM file'];
export const acronym = 'ZIM';
export const expandedAcronym = 'Zeno IMproved';
export const genericIconName = null;
export const aliasList = [];
export const subClassOfList = [];
export const globList = [
  {
    pattern: '*.zim',
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
        value: '\\x5a\\x49\\x4d\\x04',
        offset: '0',
        mask: null,
        matchList: [],
      },
    ],
  },
];
export const treeMagicList = [];
export const rootXmlList = [];
