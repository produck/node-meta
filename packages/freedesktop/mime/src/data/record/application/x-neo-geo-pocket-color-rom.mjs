/** The media type this record describes. */
export const mediaType = 'application/x-neo-geo-pocket-color-rom';

export const commentList = ['Neo-Geo Pocket Color ROM'];
export const acronym = null;
export const expandedAcronym = null;
export const genericIconName = 'application-x-executable';
export const aliasList = [];
export const subClassOfList = [];
export const globList = [
  {
    pattern: '*.ngc',
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
        value: '0x10',
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
