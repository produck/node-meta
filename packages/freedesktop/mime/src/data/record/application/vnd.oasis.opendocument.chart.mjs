/** The media type this record describes. */
export const mediaType = 'application/vnd.oasis.opendocument.chart';

export const commentList = ['ODC chart'];
export const acronym = 'ODC';
export const expandedAcronym = 'OpenDocument Chart';
export const genericIconName = 'x-office-spreadsheet';
export const aliasList = [];
export const subClassOfList = ['application/zip'];
export const globList = [
  {
    pattern: '*.odc',
    weight: null,
    caseSensitive: false,
  },
];
export const magicList = [
  {
    priority: 70,
    matchList: [
      {
        type: 'string',
        value: 'PK\\003\\004',
        offset: '0',
        mask: null,
        matchList: [
          {
            type: 'string',
            value: 'mimetype',
            offset: '30',
            mask: null,
            matchList: [
              {
                type: 'string',
                value: 'application/vnd.oasis.opendocument.chart',
                offset: '38',
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
