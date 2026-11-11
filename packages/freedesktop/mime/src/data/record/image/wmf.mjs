/** The media type this record describes. */
export const mediaType = 'image/wmf';

export const commentList = ['WMF image'];
export const acronym = 'WMF';
export const expandedAcronym = 'Windows Metafile';
export const genericIconName = null;
export const aliasList = [
  'image/x-wmf',
  'image/x-win-metafile',
  'application/x-wmf',
  'application/wmf',
  'application/x-msmetafile',
];
export const subClassOfList = [];
export const globList = [
  {
    pattern: '*.wmf',
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
        value: '0x9AC6CDD7',
        offset: '0',
        mask: null,
        matchList: [
          {
            type: 'little16',
            value: '0x0001',
            offset: '22',
            mask: null,
            matchList: [
              {
                type: 'little16',
                value: '0x0009',
                offset: '24',
                mask: null,
                matchList: [],
              },
            ],
          },
        ],
      },
      {
        type: 'little16',
        value: '0x0001',
        offset: '0',
        mask: null,
        matchList: [
          {
            type: 'little16',
            value: '0x0009',
            offset: '2',
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
