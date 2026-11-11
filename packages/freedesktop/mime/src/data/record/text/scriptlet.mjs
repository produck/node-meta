/** The media type this record describes. */
export const mediaType = 'text/scriptlet';

export const commentList = ['Windows scriptlet'];
export const acronym = null;
export const expandedAcronym = null;
export const genericIconName = 'text-x-script';
export const aliasList = [];
export const subClassOfList = ['application/xml'];
export const globList = [
  {
    pattern: '*.sct',
    weight: 40,
    caseSensitive: false,
  },
  {
    pattern: '*.wsc',
    weight: 40,
    caseSensitive: false,
  },
];
export const magicList = [
  {
    priority: 60,
    matchList: [
      {
        type: 'string',
        value: '<scriptlet',
        offset: '0:256',
        mask: null,
        matchList: [],
      },
    ],
  },
];
export const treeMagicList = [];
export const rootXmlList = [];
