/** The media type this record describes. */
export const mediaType = 'image/x-portable-arbitrarymap';

export const commentList = ['PAM image'];
export const acronym = 'PAM';
export const expandedAcronym = 'Portable Arbitrary Map';
export const genericIconName = null;
export const aliasList = [];
export const subClassOfList = ['image/x-portable-anymap'];
export const globList = [
  {
    pattern: '*.pam',
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
        value: 'P7\\x0a',
        offset: '0',
        mask: null,
        matchList: [
          {
            type: 'string',
            value: 'WIDTH',
            offset: '0:256',
            mask: null,
            matchList: [
              {
                type: 'string',
                value: 'HEIGHT',
                offset: '0:256',
                mask: null,
                matchList: [
                  {
                    type: 'string',
                    value: 'DEPTH',
                    offset: '0:256',
                    mask: null,
                    matchList: [
                      {
                        type: 'string',
                        value: 'ENDHDR',
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
        ],
      },
    ],
  },
];
export const treeMagicList = [];
export const rootXmlList = [];
