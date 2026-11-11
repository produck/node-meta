/** The media type this record describes. */
export const mediaType = 'application/x-iff';

export const commentList = ['IFF file'];
export const acronym = 'IFF';
export const expandedAcronym = 'Interchange File Format';
export const genericIconName = null;
export const aliasList = [];
export const subClassOfList = [];
export const globList = [];
export const magicList = [
  {
    priority: 40,
    matchList: [
      {
        type: 'string',
        value: 'FORM',
        offset: '0',
        mask: null,
        matchList: [],
      },
    ],
  },
];
export const treeMagicList = [];
export const rootXmlList = [];
