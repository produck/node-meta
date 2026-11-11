/** The media type this record describes. */
export const mediaType = 'text/gff3';

export const commentList = ['GFF3 genomic data'];
export const acronym = 'GFF3';
export const expandedAcronym = 'Generic Feature Format version 3';
export const genericIconName = null;
export const aliasList = [];
export const subClassOfList = [];
export const globList = [
  {
    pattern: '*.gff',
    weight: null,
    caseSensitive: false,
  },
  {
    pattern: '*.gff3',
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
        value: '##gff-version 3',
        offset: '0',
        mask: null,
        matchList: [],
      },
    ],
  },
];
export const treeMagicList = [];
export const rootXmlList = [];
