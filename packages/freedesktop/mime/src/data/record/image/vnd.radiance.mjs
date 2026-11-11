/** The media type this record describes. */
export const mediaType = 'image/vnd.radiance';

export const commentList = ['Radiance HDR image'];
export const acronym = null;
export const expandedAcronym = null;
export const genericIconName = null;
export const aliasList = ['image/x-hdr'];
export const subClassOfList = [];
export const globList = [
  {
    pattern: '*.hdr',
    weight: null,
    caseSensitive: false,
  },
  {
    pattern: '*.pic',
    weight: null,
    caseSensitive: false,
  },
  {
    pattern: '*.rgbe',
    weight: null,
    caseSensitive: false,
  },
  {
    pattern: '*.xyze',
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
        value: '#?RADIANCE',
        offset: '0',
        mask: null,
        matchList: [],
      },
    ],
  },
];
export const treeMagicList = [];
export const rootXmlList = [];
