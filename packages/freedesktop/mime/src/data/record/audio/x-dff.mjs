/** The media type this record describes. */
export const mediaType = 'audio/x-dff';

export const commentList = ['DSDIFF audio'];
export const acronym = 'DSDIFF';
export const expandedAcronym = 'Direct Stream Digital Interchange File Format';
export const genericIconName = null;
export const aliasList = ['audio/dff'];
export const subClassOfList = [];
export const globList = [
  {
    pattern: '*.dff',
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
        value: 'FRM8',
        offset: '0',
        mask: null,
        matchList: [
          {
            type: 'string',
            value: 'DSD ',
            offset: '12',
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
