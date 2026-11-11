/** The media type this record describes. */
export const mediaType = 'video/dv';

export const commentList = ['DV video'];
export const acronym = 'DV';
export const expandedAcronym = 'Digital Video';
export const genericIconName = null;
export const aliasList = [];
export const subClassOfList = [];
export const globList = [
  {
    pattern: '*.dv',
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
        value: '0x1f070000',
        offset: '0',
        mask: '0xffffff00',
        matchList: [],
      },
    ],
  },
];
export const treeMagicList = [];
export const rootXmlList = [];
