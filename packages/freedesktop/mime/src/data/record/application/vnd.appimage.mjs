/** The media type this record describes. */
export const mediaType = 'application/vnd.appimage';

export const commentList = ['AppImage application bundle'];
export const acronym = null;
export const expandedAcronym = null;
export const genericIconName = 'application-x-executable';
export const aliasList = [];
export const subClassOfList = ['application/x-executable'];
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
                    value: '0x02',
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

/** About glob */
const glob0 = '*.appimage';

export const globList = [
  {
    pattern: glob0,
    weight: 60,
    caseSensitive: false,
  },
];

export const globPatternList = [glob0];
