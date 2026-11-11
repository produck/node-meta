/** The media type this record describes. */
export const mediaType = 'text/x-mrml';

export const commentList = ['MRML playlist'];
export const acronym = 'MRML';
export const expandedAcronym = 'Multimedia Retrieval Markup Language';
export const genericIconName = null;
export const aliasList = [];
export const subClassOfList = ['application/xml'];
export const globList = [
  {
    pattern: '*.mrml',
    weight: null,
    caseSensitive: false,
  },
  {
    pattern: '*.mrl',
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
        value: '<mrml ',
        offset: '0',
        mask: null,
        matchList: [],
      },
    ],
  },
];
export const treeMagicList = [];
export const rootXmlList = [];
