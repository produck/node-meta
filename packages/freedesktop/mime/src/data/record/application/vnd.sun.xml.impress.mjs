/** The media type this record describes. */
export const mediaType = 'application/vnd.sun.xml.impress';

export const commentList = ['OpenOffice.org 1.0 Impress presentation'];
export const acronym = null;
export const expandedAcronym = null;
export const genericIconName = 'x-office-presentation';
export const aliasList = [];
export const subClassOfList = ['application/zip'];
export const globList = [
  {
    pattern: '*.sxi',
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
                value: 'application/vnd.sun.xml.impress',
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
