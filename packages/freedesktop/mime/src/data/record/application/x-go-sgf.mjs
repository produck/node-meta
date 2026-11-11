/** The media type this record describes. */
export const mediaType = 'application/x-go-sgf';

export const commentList = ['SGF record'];
export const acronym = 'SGF';
export const expandedAcronym = 'Smart Game Format';
export const genericIconName = 'text-x-generic';
export const aliasList = [];
export const subClassOfList = ['text/plain'];
export const globList = [
  {
    pattern: '*.sgf',
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
        value: '(;FF[3]',
        offset: '0',
        mask: null,
        matchList: [],
      },
      {
        type: 'string',
        value: '(;FF[4]',
        offset: '0',
        mask: null,
        matchList: [],
      },
    ],
  },
];
export const treeMagicList = [];
export const rootXmlList = [];
