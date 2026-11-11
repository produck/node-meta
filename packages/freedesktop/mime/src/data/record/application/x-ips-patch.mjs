/** The media type this record describes. */
export const mediaType = 'application/x-ips-patch';

export const commentList = ['IPS patch'];
export const acronym = 'IPS';
export const expandedAcronym = 'International Patching System';
export const genericIconName = null;
export const aliasList = [];
export const subClassOfList = [];
export const globList = [
  {
    pattern: '*.ips',
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
        value: 'PATCH',
        offset: '0',
        mask: null,
        matchList: [],
      },
    ],
  },
];
export const treeMagicList = [];
export const rootXmlList = [];
