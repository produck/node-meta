/** The media type this record describes. */
export const mediaType = 'application/x-ms-pdb';

export const commentList = ['Windows program database'];
export const acronym = null;
export const expandedAcronym = null;
export const genericIconName = null;
export const aliasList = [];
export const subClassOfList = [];
export const globList = [
  {
    pattern: '*.pdb',
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
        value: 'Microsoft C/C++ MSF 7.00\\r\\n\\x1aDS',
        offset: '0',
        mask: null,
        matchList: [],
      },
      {
        type: 'string',
        value: 'Microsoft C/C++ program database 2.00\\r\\n\\x1aJG',
        offset: '0',
        mask: null,
        matchList: [],
      },
    ],
  },
];
export const treeMagicList = [];
export const rootXmlList = [];
