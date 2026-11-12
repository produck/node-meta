/** The media type this record describes. */
export const mediaType = 'text/vnd.familysearch.gedcom';

export const commentList = ['GEDCOM family history'];
export const acronym = 'GEDCOM';
export const expandedAcronym = 'GEnealogical Data COMmunication';
export const genericIconName = 'x-office-document';
export const aliasList = ['application/x-gedcom', 'text/gedcom'];
export const subClassOfList = ['text/plain'];
export const magicList = [
  {
    priority: null,
    matchList: [
      {
        type: 'string',
        value: '0 HEAD',
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
const glob0 = '*.ged';
const glob1 = '*.gedcom';

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
];

export const globPatternList = [glob0, glob1];
