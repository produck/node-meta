/** The media type this record describes. */
export const mediaType = 'application/x-commodore-crt';

export const commentList = ['Commodore cartridge'];
export const acronym = null;
export const expandedAcronym = null;
export const genericIconName = 'application-x-executable';
export const aliasList = [];
export const subClassOfList = [];
export const globList = [
  {
    pattern: '*.crt',
    weight: 30,
    caseSensitive: false,
  },
];
export const magicList = [
  {
    priority: null,
    matchList: [
      {
        type: 'string',
        value: 'C64 CARTRIDGE   ',
        offset: '0',
        mask: null,
        matchList: [],
      },
      {
        type: 'string',
        value: 'C128 CARTRIDGE  ',
        offset: '0',
        mask: null,
        matchList: [],
      },
      {
        type: 'string',
        value: 'CBM2 CARTRIDGE  ',
        offset: '0',
        mask: null,
        matchList: [],
      },
      {
        type: 'string',
        value: 'VIC20 CARTRIDGE ',
        offset: '0',
        mask: null,
        matchList: [],
      },
      {
        type: 'string',
        value: 'PLUS4 CARTRIDGE ',
        offset: '0',
        mask: null,
        matchList: [],
      },
    ],
  },
];
export const treeMagicList = [];
export const rootXmlList = [];
