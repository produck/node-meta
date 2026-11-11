/** The media type this record describes. */
export const mediaType = 'audio/annodex';

export const commentList = ['Annodex audio'];
export const acronym = null;
export const expandedAcronym = null;
export const genericIconName = null;
export const aliasList = ['audio/x-annodex'];
export const subClassOfList = ['application/annodex'];
export const globList = [
  {
    pattern: '*.axa',
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
        value: 'OggS',
        offset: '0',
        mask: null,
        matchList: [
          {
            type: 'string',
            value: 'fishead\\0',
            offset: '28',
            mask: null,
            matchList: [
              {
                type: 'string',
                value: 'CMML\\0\\0\\0\\0',
                offset: '56:512',
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
