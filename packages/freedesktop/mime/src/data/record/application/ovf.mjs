/** The media type this record describes. */
export const mediaType = 'application/ovf';

export const commentList = ['OVF disk image'];
export const acronym = 'OVF';
export const expandedAcronym = 'Open Virtualization Format';
export const genericIconName = null;
export const aliasList = ['application/x-virtualbox-ova'];
export const subClassOfList = ['application/x-tar'];
export const globList = [
  {
    pattern: '*.ova',
    weight: null,
    caseSensitive: false,
  },
];
export const magicList = [
  {
    priority: 62,
    matchList: [
      {
        type: 'string',
        value: '.ovf',
        offset: '1:256',
        mask: null,
        matchList: [
          {
            type: 'string',
            value: 'ustar\\0',
            offset: '257',
            mask: null,
            matchList: [],
          },
          {
            type: 'string',
            value: 'ustar\\040\\040\\0',
            offset: '257',
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
