/** The media type this record describes. */
export const mediaType = 'application/mxf';

export const commentList = ['MXF video'];
export const acronym = 'MXF';
export const expandedAcronym = 'Material Exchange Format';
export const genericIconName = 'video-x-generic';
export const aliasList = [];
export const subClassOfList = [];
export const globList = [
  {
    pattern: '*.mxf',
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
        value:
          '\\x06\\x0e\\x2b\\x34\\x02\\x05\\x01\\x01\\x0d\\x01\\x02\\x01\\x01\\x02',
        offset: '0:256',
        mask: null,
        matchList: [],
      },
    ],
  },
];
export const treeMagicList = [];
export const rootXmlList = [];
