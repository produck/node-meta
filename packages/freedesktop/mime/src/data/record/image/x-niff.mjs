/** The media type this record describes. */
export const mediaType = 'image/x-niff';

export const commentList = ['NIFF image'];
export const acronym = 'NIFF';
export const expandedAcronym = 'Navy Image File Format';
export const genericIconName = null;
export const aliasList = [];
export const subClassOfList = [];
export const magicList = [
  {
    priority: 80,
    matchList: [
      {
        type: 'string',
        value: 'IIN1',
        offset: '0',
        mask: null,
        matchList: [],
      },
    ],
  },
];
export const treeMagicList = [];
export const rootXmlList = [];

export const globList = [];

export const globPatternList = [];
