/** The media type this record describes. */
export const mediaType = 'application/x-tar';

export const commentList = ['Tar archive'];
export const acronym = null;
export const expandedAcronym = null;
export const genericIconName = 'package-x-generic';
export const aliasList = ['application/x-gtar'];
export const subClassOfList = [];
export const globList = [
  {
    pattern: '*.tar',
    weight: null,
    caseSensitive: false,
  },
  {
    pattern: '*.gtar',
    weight: null,
    caseSensitive: false,
  },
  {
    pattern: '*.gem',
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
        value: 'ustar\\0',
        offset: '257',
        mask: null,
        matchList: [],
      },
      {
        type: 'string',
        value: 'ustar\\040\\040\\0',
        offset: '257',
        mask: null,
        matchList: [],
      },
    ],
  },
];
export const treeMagicList = [];
export const rootXmlList = [];
