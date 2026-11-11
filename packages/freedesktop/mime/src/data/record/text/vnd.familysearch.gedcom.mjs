/** The media type this record describes. */
export const mediaType = 'text/vnd.familysearch.gedcom';

export const commentList = ['GEDCOM family history'];
export const acronym = 'GEDCOM';
export const expandedAcronym = 'GEnealogical Data COMmunication';
export const genericIconName = 'x-office-document';
export const aliasList = ['application/x-gedcom', 'text/gedcom'];
export const subClassOfList = ['text/plain'];
export const globList = [
  {
    pattern: '*.ged',
    weight: null,
    caseSensitive: false,
  },
  {
    pattern: '*.gedcom',
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
