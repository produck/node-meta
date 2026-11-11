/** The media type this record describes. */
export const mediaType = 'text/x-devicetree-binary';

export const commentList = ['Flattened Devicetree'];
export const acronym = 'DTB';
export const expandedAcronym = 'Device Tree Binary';
export const genericIconName = null;
export const aliasList = [];
export const subClassOfList = [];
export const globList = [
  {
    pattern: '*.dtb',
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
        value: '0xd00dfeed',
        offset: '0',
        mask: null,
        matchList: [],
      },
    ],
  },
];
export const treeMagicList = [];
export const rootXmlList = [];
