/** The media type this record describes. */
export const mediaType = 'text/x-iptables';

export const commentList = ['iptables configuration file'];
export const acronym = null;
export const expandedAcronym = null;
export const genericIconName = null;
export const aliasList = [];
export const subClassOfList = ['text/plain'];
export const globList = [
  {
    pattern: '*.iptables',
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
        value: '/etc/sysconfig/iptables',
        offset: '0:256',
        mask: null,
        matchList: [],
      },
      {
        type: 'string',
        value: '*filter',
        offset: '0:256',
        mask: null,
        matchList: [
          {
            type: 'string',
            value: ':INPUT',
            offset: '0:256',
            mask: null,
            matchList: [
              {
                type: 'string',
                value: ':FORWARD',
                offset: '0:256',
                mask: null,
                matchList: [
                  {
                    type: 'string',
                    value: ':OUTPUT',
                    offset: '0:256',
                    mask: null,
                    matchList: [],
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        type: 'string',
        value: '-A INPUT',
        offset: '0:256',
        mask: null,
        matchList: [
          {
            type: 'string',
            value: '-A FORWARD',
            offset: '0:256',
            mask: null,
            matchList: [
              {
                type: 'string',
                value: '-A OUTPUT',
                offset: '0:256',
                mask: null,
                matchList: [],
              },
            ],
          },
        ],
      },
      {
        type: 'string',
        value: '-P INPUT',
        offset: '0:256',
        mask: null,
        matchList: [
          {
            type: 'string',
            value: '-P FORWARD',
            offset: '0:256',
            mask: null,
            matchList: [
              {
                type: 'string',
                value: '-P OUTPUT',
                offset: '0:256',
                mask: null,
                matchList: [],
              },
            ],
          },
        ],
      },
    ],
  },
];
export const treeMagicList = [];
export const rootXmlList = [];
