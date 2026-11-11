/** The media type this record describes. */
export const mediaType = 'image/x-pict';

export const commentList = ['Macintosh Quickdraw/PICT drawing'];
export const acronym = null;
export const expandedAcronym = null;
export const genericIconName = null;
export const aliasList = [];
export const subClassOfList = [];
export const globList = [
  {
    pattern: '*.pct',
    weight: null,
    caseSensitive: false,
  },
  {
    pattern: '*.pict',
    weight: null,
    caseSensitive: false,
  },
  {
    pattern: '*.pict1',
    weight: null,
    caseSensitive: false,
  },
  {
    pattern: '*.pict2',
    weight: null,
    caseSensitive: false,
  },
];
export const magicList = [
  {
    priority: null,
    matchList: [
      {
        type: 'big16',
        value: '0x0011',
        offset: '10',
        mask: null,
        matchList: [
          {
            type: 'big16',
            value: '0x02FF',
            offset: '12',
            mask: null,
            matchList: [
              {
                type: 'big16',
                value: '0x0C00',
                offset: '14',
                mask: null,
                matchList: [
                  {
                    type: 'big16',
                    value: '0xFFFE',
                    offset: '16',
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
  {
    priority: null,
    matchList: [
      {
        type: 'big16',
        value: '0x0011',
        offset: '522',
        mask: null,
        matchList: [
          {
            type: 'big16',
            value: '0x02FF',
            offset: '524',
            mask: null,
            matchList: [
              {
                type: 'big16',
                value: '0x0C00',
                offset: '526',
                mask: null,
                matchList: [
                  {
                    type: 'big16',
                    value: '0xFFFE',
                    offset: '528',
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
];
export const treeMagicList = [];
export const rootXmlList = [];
