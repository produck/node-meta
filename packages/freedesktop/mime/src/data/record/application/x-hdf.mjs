/** The media type this record describes. */
export const mediaType = 'application/x-hdf';

export const commentList = ['HDF document'];
export const acronym = 'HDF';
export const expandedAcronym = 'Hierarchical Data Format';
export const genericIconName = 'x-office-document';
export const aliasList = [];
export const subClassOfList = [];
export const globList = [
  {
    pattern: '*.hdf',
    weight: null,
    caseSensitive: false,
  },
  {
    pattern: '*.hdf4',
    weight: null,
    caseSensitive: false,
  },
  {
    pattern: '*.h4',
    weight: null,
    caseSensitive: false,
  },
  {
    pattern: '*.hdf5',
    weight: null,
    caseSensitive: false,
  },
  {
    pattern: '*.h5',
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
