/** The media type this record describes. */
export const mediaType = 'image/x-panasonic-rw';

export const commentList = ['Panasonic raw image'];
export const acronym = null;
export const expandedAcronym = null;
export const genericIconName = null;
export const aliasList = ['image/x-panasonic-raw'];
export const subClassOfList = ['image/x-dcraw'];
export const globList = [
  {
    pattern: '*.raw',
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
        value: 'IIU\\x00\\x08\\x00\\x00\\x00',
        offset: '0',
        mask: null,
        matchList: [],
      },
    ],
  },
];
export const treeMagicList = [];
export const rootXmlList = [];
