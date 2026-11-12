/** The media type this record describes. */
export const mediaType = 'application/x-font-linux-psf';

export const commentList = ['Linux PSF console font'];
export const acronym = 'PSF';
export const expandedAcronym = 'PC Screen Font';
export const genericIconName = 'font-x-generic';
export const aliasList = [];
export const subClassOfList = [];
export const magicList = [
  {
    priority: null,
    matchList: [
      {
        type: 'string',
        value: '\\x36\\x04',
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
const glob0 = '*.psf';

export const globList = [
  {
    pattern: glob0,
    weight: null,
    caseSensitive: false,
  },
];

export const globPatternList = [glob0];
