/** The media type this record describes. */
export const mediaType = 'application/x-sharedlib';

export const commentList = ['Shared library'];
export const acronym = null;
export const expandedAcronym = null;
export const genericIconName = null;
export const aliasList = [];
export const subClassOfList = [];
export const magicList = [
  {
    priority: null,
    matchList: [
      {
        type: 'little16',
        value: '0603',
        offset: '0',
        mask: null,
        matchList: [
          {
            type: 'little16',
            value: '020000',
            offset: '22',
            mask: '030000',
            matchList: [],
          },
        ],
      },
    ],
  },
];
export const treeMagicList = [];
export const rootXmlList = [];

/** About glob */
const glob0 = '*.so';
const glob1 = '*.so.[0-9]*';

export const globList = [
  {
    pattern: glob0,
    weight: null,
    caseSensitive: false,
  },
  {
    pattern: glob1,
    weight: 60,
    caseSensitive: false,
  },
];

export const globPatternList = [glob0, glob1];
