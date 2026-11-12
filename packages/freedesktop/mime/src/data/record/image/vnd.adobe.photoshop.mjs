/** The media type this record describes. */
export const mediaType = 'image/vnd.adobe.photoshop';

export const commentList = ['Photoshop image'];
export const acronym = null;
export const expandedAcronym = null;
export const genericIconName = null;
export const aliasList = [
  'image/psd',
  'image/x-psd',
  'image/photoshop',
  'image/x-photoshop',
  'application/photoshop',
  'application/x-photoshop',
];
export const subClassOfList = [];
export const magicList = [
  {
    priority: null,
    matchList: [
      {
        type: 'string',
        value: '8BPS  \\000\\000\\000\\000',
        offset: '0',
        mask: '0xffffffff0000ffffffff',
        matchList: [],
      },
    ],
  },
];
export const treeMagicList = [];
export const rootXmlList = [];

/** About glob */
const glob0 = '*.psd';

export const globList = [
  {
    pattern: glob0,
    weight: null,
    caseSensitive: false,
  },
];

export const globPatternList = [glob0];
