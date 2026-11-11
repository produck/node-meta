/** The media type this record describes. */
export const mediaType = 'application/x-sony-bbeb';

export const commentList = ['BroadBand eBook'];
export const acronym = null;
export const expandedAcronym = null;
export const genericIconName = 'x-office-document';
export const aliasList = [];
export const subClassOfList = [];
export const globList = [
  {
    pattern: '*.lrf',
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
        value: 'L\\0R\\0F\\0\\0\\0',
        offset: '0',
        mask: null,
        matchList: [],
      },
    ],
  },
];
export const treeMagicList = [];
export const rootXmlList = [];
