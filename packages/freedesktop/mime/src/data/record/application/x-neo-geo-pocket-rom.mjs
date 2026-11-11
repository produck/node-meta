/** The media type this record describes. */
export const mediaType = 'application/x-neo-geo-pocket-rom';

export const commentList = ['Neo-Geo Pocket ROM'];
export const acronym = null;
export const expandedAcronym = null;
export const genericIconName = 'application-x-executable';
export const aliasList = [];
export const subClassOfList = [];
export const globList = [
  {
    pattern: '*.ngp',
    weight: null,
    caseSensitive: false,
  },
];
export const magicList = [
  {
    priority: null,
    matchList: [
      {
        type: 'byte',
        value: '0x0',
        offset: '35',
        mask: null,
        matchList: [
          {
            type: 'string',
            value: 'COPYRIGHT BY SNK CORPORATION',
            offset: '0',
            mask: null,
            matchList: [],
          },
          {
            type: 'string',
            value: ' LICENSED BY SNK CORPORATION',
            offset: '0',
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
