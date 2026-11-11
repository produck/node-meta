/** The media type this record describes. */
export const mediaType = 'image/vnd.ms-dds';

export const commentList = ['DirectDraw Surface'];
export const acronym = null;
export const expandedAcronym = null;
export const genericIconName = null;
export const aliasList = ['image/x-dds'];
export const subClassOfList = [];
export const globList = [
  {
    pattern: '*.dds',
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
        value: 'DDS ',
        offset: '0',
        mask: null,
        matchList: [],
      },
    ],
  },
];
export const treeMagicList = [];
export const rootXmlList = [];
