/** The media type this record describes. */
export const mediaType = 'image/vnd.dxf';

export const commentList = ['DXF vector image'];
export const acronym = null;
export const expandedAcronym = null;
export const genericIconName = null;
export const aliasList = [];
export const subClassOfList = [];
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

/** About glob */
const glob0 = '*.dxf';

export const globList = [
  {
    pattern: glob0,
    weight: null,
    caseSensitive: false,
  },
];

export const globPatternList = [glob0];
