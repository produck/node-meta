/** The media type this record describes. */
export const mediaType = 'text/x-gettext-translation-template';

export const commentList = ['Translation template'];
export const acronym = null;
export const expandedAcronym = null;
export const genericIconName = null;
export const aliasList = ['text/x-pot'];
export const subClassOfList = ['text/plain'];
export const globList = [
  {
    pattern: '*.pot',
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
        value:
          '#, fuzzy\\nmsgid \\"\\"\\nmsgstr \\"\\"\\n\\"Project-Id-Version:',
        offset: '0:256',
        mask: null,
        matchList: [],
      },
    ],
  },
];
export const treeMagicList = [];
export const rootXmlList = [];
