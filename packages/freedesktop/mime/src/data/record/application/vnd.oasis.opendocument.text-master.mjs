/** The media type this record describes. */
export const mediaType = 'application/vnd.oasis.opendocument.text-master';

export const commentList = ['ODM document'];
export const acronym = 'ODM';
export const expandedAcronym = 'OpenDocument Master';
export const genericIconName = 'x-office-document';
export const aliasList = [];
export const subClassOfList = ['application/zip'];
export const globList = [
  {
    pattern: '*.odm',
    weight: null,
    caseSensitive: false,
  },
];
export const magicList = [
  {
    priority: 75,
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
                value: 'application/vnd.oasis.opendocument.text-master',
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
