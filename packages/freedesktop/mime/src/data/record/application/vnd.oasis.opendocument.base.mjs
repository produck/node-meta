/** The media type this record describes. */
export const mediaType = 'application/vnd.oasis.opendocument.base';

export const commentList = ['ODB database'];
export const acronym = 'ODB';
export const expandedAcronym = 'OpenDocument Database';
export const genericIconName = 'x-office-document';
export const aliasList = [
  'application/vnd.oasis.opendocument.database',
  'application/vnd.sun.xml.base',
];
export const subClassOfList = ['application/zip'];
export const globList = [
  {
    pattern: '*.odb',
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
                value: 'application/vnd.oasis.opendocument.base',
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
