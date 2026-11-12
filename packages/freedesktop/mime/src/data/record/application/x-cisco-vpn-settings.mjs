/** The media type this record describes. */
export const mediaType = 'application/x-cisco-vpn-settings';

export const commentList = ['Cisco VPN settings'];
export const acronym = null;
export const expandedAcronym = null;
export const genericIconName = 'text-x-generic';
export const aliasList = [];
export const subClassOfList = ['text/plain'];
export const magicList = [
  {
    priority: null,
    matchList: [
      {
        type: 'string',
        value: '[main]',
        offset: '0',
        mask: null,
        matchList: [
          {
            type: 'string',
            value: 'AuthType=',
            offset: '0:256',
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

/** About glob */
const glob0 = '*.pcf';

export const globList = [
  {
    pattern: glob0,
    weight: null,
    caseSensitive: false,
  },
];

export const globPatternList = [glob0];
