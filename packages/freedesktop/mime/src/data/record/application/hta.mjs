/** The media type this record describes. */
export const mediaType = 'application/hta';

export const commentList = ['Windows HTML desktop application'];
export const acronym = 'HTML';
export const expandedAcronym = 'HyperText Markup Language';
export const genericIconName = 'text-html';
export const aliasList = [];
export const subClassOfList = ['text/html'];
export const globList = [
  {
    pattern: '*.hta',
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
        value: '<hta:application',
        offset: '0:256',
        mask: null,
        matchList: [],
      },
      {
        type: 'string',
        value: '<HTA:APPLICATION',
        offset: '0:256',
        mask: null,
        matchList: [],
      },
    ],
  },
];
export const treeMagicList = [];
export const rootXmlList = [];
