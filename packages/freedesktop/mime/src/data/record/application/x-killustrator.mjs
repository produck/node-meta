/** The media type this record describes. */
export const mediaType = 'application/x-killustrator';

export const commentList = ['KIllustrator drawing'];
export const acronym = null;
export const expandedAcronym = null;
export const genericIconName = 'image-x-generic';
export const aliasList = [];
export const subClassOfList = [];
export const globList = [
  {
    pattern: '*.kil',
    weight: null,
    caseSensitive: false,
  },
];
export const magicList = [
  {
    priority: 60,
    matchList: [
      {
        type: 'string',
        value: '\\037\\213',
        offset: '0',
        mask: null,
        matchList: [
          {
            type: 'string',
            value: 'KOffice',
            offset: '10',
            mask: null,
            matchList: [
              {
                type: 'string',
                value: 'application/x-killustrator\\004\\006',
                offset: '18',
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
