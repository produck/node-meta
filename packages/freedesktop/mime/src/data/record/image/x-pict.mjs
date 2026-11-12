/** The media type this record describes. */
export const mediaType = 'image/x-pict';

export const commentList = ['Macintosh Quickdraw/PICT drawing'];
export const acronym = null;
export const expandedAcronym = null;
export const genericIconName = null;
export const aliasList = [];
export const subClassOfList = [];
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

/** About glob */
const glob0 = '*.pct';
const glob1 = '*.pict';
const glob2 = '*.pict1';
const glob3 = '*.pict2';

export const globList = [
  {
    pattern: glob0,
    weight: null,
    caseSensitive: false,
  },
  {
    pattern: glob1,
    weight: null,
    caseSensitive: false,
  },
  {
    pattern: glob2,
    weight: null,
    caseSensitive: false,
  },
  {
    pattern: glob3,
    weight: null,
    caseSensitive: false,
  },
];

export const globPatternList = [glob0, glob1, glob2, glob3];
