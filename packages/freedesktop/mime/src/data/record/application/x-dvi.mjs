/** The media type this record describes. */
export const mediaType = 'application/x-dvi';

export const commentList = ['TeX DVI document'];
export const acronym = 'DVI';
export const expandedAcronym = 'Device independent file format';
export const genericIconName = 'x-office-document';
export const aliasList = [];
export const subClassOfList = [];
export const globList = [
  {
    pattern: '*.dvi',
    weight: null,
    caseSensitive: false,
  },
];
export const magicList = [
  {
    priority: null,
    matchList: [
      {
        type: 'little16',
        value: '0x02f7',
        offset: '0',
        mask: null,
        matchList: [],
      },
    ],
  },
];
export const treeMagicList = [];
export const rootXmlList = [];
