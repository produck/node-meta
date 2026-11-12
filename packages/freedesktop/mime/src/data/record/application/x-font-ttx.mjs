/** The media type this record describes. */
export const mediaType = 'application/x-font-ttx';

export const commentList = ['TrueType XML font'];
export const acronym = null;
export const expandedAcronym = null;
export const genericIconName = 'font-x-generic';
export const aliasList = [];
export const subClassOfList = ['application/xml'];
export const magicList = [
  {
    priority: null,
    matchList: [
      {
        type: 'string',
        value:
          '<ttFont sfntVersion="\\\\x00\\\\x01\\\\x00\\\\x00" ttLibVersion="',
        offset: '0:256',
        mask: null,
        matchList: [],
      },
    ],
  },
];
export const treeMagicList = [];
export const rootXmlList = [];

/** About glob */
const glob0 = '*.ttx';

export const globList = [
  {
    pattern: glob0,
    weight: null,
    caseSensitive: false,
  },
];

export const globPatternList = [glob0];
