/** The media type this record describes. */
export const mediaType = 'application/vnd.oasis.opendocument.graphics-template';

export const commentList = ['ODG template'];
export const acronym = 'ODG';
export const expandedAcronym = 'OpenDocument Drawing';
export const genericIconName = 'image-x-generic';
export const aliasList = [];
export const subClassOfList = ['application/zip'];
export const globList = [
  {
    pattern: '*.otg',
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
                value: 'application/vnd.oasis.opendocument.graphics-template',
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
