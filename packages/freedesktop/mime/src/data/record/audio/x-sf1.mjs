/** The media type this record describes. */
export const mediaType = 'audio/x-sf1';

export const commentList = ['SoundFont 1 audio'];
export const acronym = null;
export const expandedAcronym = null;
export const genericIconName = null;
export const aliasList = [];
export const subClassOfList = ['application/x-riff'];
export const magicList = [
  {
    priority: null,
    matchList: [
      {
        type: 'string',
        value: 'RIFF',
        offset: '0',
        mask: null,
        matchList: [
          {
            type: 'string',
            value: 'sfbk',
            offset: '8',
            mask: null,
            matchList: [
              {
                type: 'string',
                value: 'LIST',
                offset: '12',
                mask: null,
                matchList: [
                  {
                    type: 'string',
                    value: 'INFOifil',
                    offset: '20',
                    mask: null,
                    matchList: [
                      {
                        type: 'string',
                        value: '\\x01\\x00',
                        offset: '32',
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
    ],
  },
];
export const treeMagicList = [];
export const rootXmlList = [];

/** About glob */
const glob0 = '*.sbk';

export const globList = [
  {
    pattern: glob0,
    weight: null,
    caseSensitive: false,
  },
];

export const globPatternList = [glob0];
