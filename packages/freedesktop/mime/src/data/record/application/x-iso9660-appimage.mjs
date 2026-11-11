/** The media type this record describes. */
export const mediaType = 'application/x-iso9660-appimage';

export const commentList = ['AppImage application bundle'];
export const acronym = null;
export const expandedAcronym = null;
export const genericIconName = 'application-x-executable';
export const aliasList = [];
export const subClassOfList = [
  'application/x-executable',
  'application/vnd.efi.iso',
];
export const globList = [
  {
    pattern: '*.appimage',
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
        value: 'ELF',
        offset: '1',
        mask: null,
        matchList: [
          {
            type: 'byte',
            value: '0x41',
            offset: '8',
            mask: null,
            matchList: [
              {
                type: 'byte',
                value: '0x49',
                offset: '9',
                mask: null,
                matchList: [
                  {
                    type: 'byte',
                    value: '0x01',
                    offset: '10',
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
