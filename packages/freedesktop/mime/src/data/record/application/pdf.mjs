/** The media type this record describes. */
export const mediaType = 'application/pdf';

export const commentList = ['PDF document'];
export const acronym = 'PDF';
export const expandedAcronym = 'Portable Document Format';
export const genericIconName = 'x-office-document';
export const aliasList = [
  'application/x-pdf',
  'image/pdf',
  'application/acrobat',
  'application/nappdf',
];
export const subClassOfList = [];
export const globList = [
  {
    pattern: '*.pdf',
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
        value: '%PDF-',
        offset: '0:1024',
        mask: null,
        matchList: [],
      },
    ],
  },
];
export const treeMagicList = [];
export const rootXmlList = [];
