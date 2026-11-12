/** The media type this record describes. */
export const mediaType = 'application/x-dvi';

export const commentList = ['TeX DVI document'];
export const acronym = 'DVI';
export const expandedAcronym = 'Device independent file format';
export const genericIconName = 'x-office-document';
export const aliasList = [];
export const subClassOfList = [];
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

/** About glob */
const glob0 = '*.dvi';

export const globList = [
  {
    pattern: glob0,
    weight: null,
    caseSensitive: false,
  },
];

export const globPatternList = [glob0];
