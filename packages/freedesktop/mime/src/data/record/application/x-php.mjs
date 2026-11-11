/** The media type this record describes. */
export const mediaType = 'application/x-php';

export const commentList = ['PHP script'];
export const acronym = null;
export const expandedAcronym = null;
export const genericIconName = 'text-x-script';
export const aliasList = [];
export const subClassOfList = ['text/plain'];
export const globList = [
  {
    pattern: '*.php',
    weight: null,
    caseSensitive: false,
  },
  {
    pattern: '*.php3',
    weight: null,
    caseSensitive: false,
  },
  {
    pattern: '*.php4',
    weight: null,
    caseSensitive: false,
  },
  {
    pattern: '*.php5',
    weight: null,
    caseSensitive: false,
  },
  {
    pattern: '*.phps',
    weight: null,
    caseSensitive: false,
  },
];
export const magicList = [
  {
    priority: 80,
    matchList: [
      {
        type: 'string',
        value: '<?php',
        offset: '0:64',
        mask: null,
        matchList: [],
      },
    ],
  },
];
export const treeMagicList = [];
export const rootXmlList = [];
