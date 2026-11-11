/** The media type this record describes. */
export const mediaType = 'application/x-asar';

export const commentList = ['Electron Archive (ASAR)'];
export const acronym = 'ASAR';
export const expandedAcronym = 'Atom Shell Archive Format';
export const genericIconName = null;
export const aliasList = [];
export const subClassOfList = [];
export const globList = [
  {
    pattern: '*.asar',
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
        value: '\\004\\000\\000\\000',
        offset: '0',
        mask: null,
        matchList: [
          {
            type: 'string',
            value: '{"files":',
            offset: '16',
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
