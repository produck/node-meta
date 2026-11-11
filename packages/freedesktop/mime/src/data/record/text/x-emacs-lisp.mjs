/** The media type this record describes. */
export const mediaType = 'text/x-emacs-lisp';

export const commentList = ['Emacs Lisp source code'];
export const acronym = null;
export const expandedAcronym = null;
export const genericIconName = null;
export const aliasList = [];
export const subClassOfList = ['text/plain'];
export const globList = [
  {
    pattern: '*.el',
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
        value: '\\012(',
        offset: '0',
        mask: null,
        matchList: [],
      },
      {
        type: 'string',
        value: ';ELC\\023\\000\\000\\000',
        offset: '0',
        mask: null,
        matchList: [],
      },
    ],
  },
];
export const treeMagicList = [];
export const rootXmlList = [];
