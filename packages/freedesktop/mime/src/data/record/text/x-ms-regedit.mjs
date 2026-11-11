/** The media type this record describes. */
export const mediaType = 'text/x-ms-regedit';

export const commentList = ['Windows Registry extract'];
export const acronym = null;
export const expandedAcronym = null;
export const genericIconName = null;
export const aliasList = [];
export const subClassOfList = ['text/plain'];
export const globList = [
  {
    pattern: '*.reg',
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
        value: 'REGEDIT',
        offset: '0',
        mask: null,
        matchList: [],
      },
      {
        type: 'string',
        value: 'Windows Registry Editor Version 5.00',
        offset: '0',
        mask: null,
        matchList: [],
      },
      {
        type: 'string',
        value:
          '\\xff\\xfeW\\x00i\\x00n\\x00d\\x00o\\x00w\\x00s\\x00 \\x00R\\x00e\\x00g\\x00i\\x00s\\x00t\\x00r\\x00y\\x00 \\x00E\\x00d\\x00i\\x00t\\x00o\\x00r\\x00',
        offset: '0',
        mask: null,
        matchList: [],
      },
    ],
  },
];
export const treeMagicList = [];
export const rootXmlList = [];
