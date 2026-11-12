/** The media type this record describes. */
export const mediaType = 'application/docbook+xml';

export const commentList = ['DocBook document'];
export const acronym = null;
export const expandedAcronym = null;
export const genericIconName = 'x-office-document';
export const aliasList = [
  'application/x-docbook+xml',
  'application/vnd.oasis.docbook+xml',
];
export const subClassOfList = ['application/xml'];
export const magicList = [
  {
    priority: 90,
    matchList: [
      {
        type: 'string',
        value: '<?xml',
        offset: '0',
        mask: null,
        matchList: [
          {
            type: 'string',
            value: '-//OASIS//DTD DocBook XML',
            offset: '0:100',
            mask: null,
            matchList: [],
          },
          {
            type: 'string',
            value: '-//KDE//DTD DocBook XML',
            offset: '0:100',
            mask: null,
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
const glob0 = '*.dbk';
const glob1 = '*.docbook';

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
