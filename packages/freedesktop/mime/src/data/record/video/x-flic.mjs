/** The media type this record describes. */
export const mediaType = 'video/x-flic';

export const commentList = ['FLIC animation'];
export const acronym = null;
export const expandedAcronym = null;
export const genericIconName = 'image-x-generic';
export const aliasList = ['video/fli', 'video/x-fli', 'video/x-flc'];
export const subClassOfList = [];
export const globList = [
  {
    pattern: '*.fli',
    weight: null,
    caseSensitive: false,
  },
  {
    pattern: '*.flc',
    weight: null,
    caseSensitive: false,
  },
];
export const magicList = [
  {
    priority: null,
    matchList: [
      {
        type: 'little16',
        value: '0xAF11',
        offset: '4',
        mask: null,
        matchList: [
          {
            type: 'little16',
            value: '0x0008',
            offset: '12',
            mask: null,
            matchList: [],
          },
        ],
      },
      {
        type: 'little16',
        value: '0xAF12',
        offset: '4',
        mask: null,
        matchList: [
          {
            type: 'little16',
            value: '0x0008',
            offset: '12',
            mask: null,
            matchList: [],
          },
        ],
      },
    ],
  },
];
export const treeMagicList = [];
export const rootXmlList = [];
