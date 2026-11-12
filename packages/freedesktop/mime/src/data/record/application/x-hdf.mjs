/** The media type this record describes. */
export const mediaType = 'application/x-hdf';

export const commentList = ['HDF document'];
export const acronym = 'HDF';
export const expandedAcronym = 'Hierarchical Data Format';
export const genericIconName = 'x-office-document';
export const aliasList = [];
export const subClassOfList = [];
export const magicList = [
  {
    priority: null,
    matchList: [
      {
        type: 'string',
        value: '\\211HDF\\r\\n\\032\\n',
        offset: '0',
        mask: null,
        matchList: [],
      },
      {
        type: 'string',
        value: '\\016\\003\\023\\001',
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
const glob0 = '*.hdf';
const glob1 = '*.hdf4';
const glob2 = '*.h4';
const glob3 = '*.hdf5';
const glob4 = '*.h5';

export const globList = [
  {
    pattern: glob0,
    weight: null,
    caseSensitive: false,
  },
  {
    pattern: glob1,
    weight: null,
    caseSensitive: false,
  },
  {
    pattern: glob2,
    weight: null,
    caseSensitive: false,
  },
  {
    pattern: glob3,
    weight: null,
    caseSensitive: false,
  },
  {
    pattern: glob4,
    weight: null,
    caseSensitive: false,
  },
];

export const globPatternList = [glob0, glob1, glob2, glob3, glob4];
