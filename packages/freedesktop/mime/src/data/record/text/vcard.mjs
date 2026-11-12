/** The media type this record describes. */
export const mediaType = 'text/vcard';

export const commentList = ['Electronic business card'];
export const acronym = null;
export const expandedAcronym = null;
export const genericIconName = null;
export const aliasList = ['text/directory', 'text/x-vcard'];
export const subClassOfList = ['text/plain'];
export const magicList = [
  {
    priority: null,
    matchList: [
      {
        type: 'string',
        value: 'BEGIN:VCARD',
        offset: '0',
        mask: null,
        matchList: [],
      },
      {
        type: 'string',
        value: 'begin:vcard',
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
const glob0 = '*.vcard';
const glob1 = '*.vcf';
const glob2 = '*.vct';
const glob3 = '*.gcrd';

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
];

export const globPatternList = [glob0, glob1, glob2, glob3];
