/** The media type this record describes. */
export const mediaType = 'application/x-vnd.corel.zcf.draw.document+zip';

export const commentList = ['Corel Draw 14.0+ drawing'];
export const acronym = null;
export const expandedAcronym = null;
export const genericIconName = 'image-x-generic';
export const aliasList = [];
export const subClassOfList = ['application/vnd.corel-draw', 'application/zip'];
export const magicList = [
  {
    priority: 70,
    matchList: [
      {
        type: 'string',
        value: 'PK\\x03\\x04',
        offset: '0',
        mask: null,
        matchList: [
          {
            type: 'string',
            value: 'content/riffData.cdrRIFF',
            offset: '30',
            mask: null,
            matchList: [
              {
                type: 'string',
                value: 'CDR',
                offset: '58',
                mask: null,
                matchList: [
                  {
                    type: 'string',
                    value: 'vrsn',
                    offset: '62',
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
        value: 'PK\\x03\\x04',
        offset: '0',
        mask: null,
        matchList: [
          {
            type: 'string',
            value: 'content/data/data1.dat',
            offset: '30',
            mask: null,
            matchList: [],
          },
        ],
      },
      {
        type: 'string',
        value: 'PK\\x03\\x04',
        offset: '0',
        mask: null,
        matchList: [
          {
            type: 'string',
            value:
              'mimetypeapplication/x-vnd.corel.zcf.draw.document+zipPK\\x03\\x04',
            offset: '30',
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
const glob0 = '*.cdr';

export const globList = [
  {
    pattern: glob0,
    weight: 40,
    caseSensitive: false,
  },
];

export const globPatternList = [glob0];
