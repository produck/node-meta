/** The media type this record describes. */
export const mediaType = 'application/vnd.stardivision.impress-packed';

export const commentList = ['StarImpress packed presentation'];
export const acronym = null;
export const expandedAcronym = null;
export const genericIconName = 'x-office-presentation';
export const aliasList = [];
export const subClassOfList = [];
export const globList = [
  {
    pattern: '*.sdp',
    weight: 10,
    caseSensitive: false,
  },
];
export const magicList = [
  {
    priority: null,
    matchList: [
      {
        type: 'string',
        value: 'PIZS',
        offset: '0',
        mask: null,
        matchList: [],
      },
    ],
  },
];
export const treeMagicList = [];
export const rootXmlList = [];
