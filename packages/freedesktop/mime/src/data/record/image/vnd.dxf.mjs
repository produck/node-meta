/** The media type this record describes. */
export const mediaType = 'image/vnd.dxf';

export const commentList = ['DXF vector image'];
export const acronym = null;
export const expandedAcronym = null;
export const genericIconName = null;
export const aliasList = [];
export const subClassOfList = [];
export const globList = [
  {
    pattern: '*.dxf',
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
        value: '\\nHEADER\\n',
        offset: '0:64',
        mask: null,
        matchList: [],
      },
      {
        type: 'string',
        value: '\\x0d\\nHEADER\\x0d\\n',
        offset: '0:64',
        mask: null,
        matchList: [],
      },
    ],
  },
];
export const treeMagicList = [];
export const rootXmlList = [];
