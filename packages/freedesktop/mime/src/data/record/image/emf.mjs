/** The media type this record describes. */
export const mediaType = 'image/emf';

export const commentList = ['EMF image'];
export const acronym = 'EMF';
export const expandedAcronym = 'Enhanced MetaFile';
export const genericIconName = null;
export const aliasList = [
  'image/x-emf',
  'application/x-emf',
  'application/emf',
];
export const subClassOfList = [];
export const globList = [
  {
    pattern: '*.emf',
    weight: null,
    caseSensitive: false,
  },
];
export const magicList = [
  {
    priority: null,
    matchList: [
      {
        type: 'little32',
        value: '0x00000001',
        offset: '0',
        mask: null,
        matchList: [
          {
            type: 'little32',
            value: '0x464D4520',
            offset: '40',
            mask: null,
            matchList: [
              {
                type: 'little32',
                value: '0x00010000',
                offset: '44',
                mask: null,
                matchList: [
                  {
                    type: 'little16',
                    value: '0x0000',
                    offset: '58',
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
