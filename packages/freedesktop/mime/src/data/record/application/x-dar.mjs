/** The media type this record describes. */
export const mediaType = 'application/x-dar';

export const commentList = ['DAR archive'];
export const acronym = 'DAR';
export const expandedAcronym = 'Disk ARchive';
export const genericIconName = 'package-x-generic';
export const aliasList = [];
export const subClassOfList = [];
export const globList = [
  {
    pattern: '*.dar',
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
        value: '123',
        offset: '0',
        mask: null,
        matchList: [],
      },
    ],
  },
];
export const treeMagicList = [];
export const rootXmlList = [];
