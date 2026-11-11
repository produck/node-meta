/** The media type this record describes. */
export const mediaType = 'text/vcard';

export const commentList = ['Electronic business card'];
export const acronym = null;
export const expandedAcronym = null;
export const genericIconName = null;
export const aliasList = ['text/directory', 'text/x-vcard'];
export const subClassOfList = ['text/plain'];
export const globList = [
  {
    pattern: '*.vcard',
    weight: null,
    caseSensitive: false,
  },
  {
    pattern: '*.vcf',
    weight: null,
    caseSensitive: false,
  },
  {
    pattern: '*.vct',
    weight: null,
    caseSensitive: false,
  },
  {
    pattern: '*.gcrd',
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
