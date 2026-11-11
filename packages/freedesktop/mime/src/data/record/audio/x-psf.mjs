/** The media type this record describes. */
export const mediaType = 'audio/x-psf';

export const commentList = ['PSF audio'];
export const acronym = 'PSF';
export const expandedAcronym = 'Portable Sound Format';
export const genericIconName = null;
export const aliasList = [];
export const subClassOfList = [];
export const globList = [
  {
    pattern: '*.psf',
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
        value: 'PSF',
        offset: '0',
        mask: null,
        matchList: [],
      },
    ],
  },
];
export const treeMagicList = [];
export const rootXmlList = [];
