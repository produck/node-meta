/** The media type this record describes. */
export const mediaType = 'text/x-makefile';

export const commentList = ['Makefile build file'];
export const acronym = null;
export const expandedAcronym = null;
export const genericIconName = null;
export const aliasList = [];
export const subClassOfList = ['text/plain'];
export const globList = [
  {
    pattern: 'makefile',
    weight: null,
    caseSensitive: false,
  },
  {
    pattern: 'GNUmakefile',
    weight: null,
    caseSensitive: false,
  },
  {
    pattern: '*.mk',
    weight: null,
    caseSensitive: false,
  },
  {
    pattern: '*.mak',
    weight: null,
    caseSensitive: false,
  },
  {
    pattern: 'Makefile.*',
    weight: 10,
    caseSensitive: false,
  },
];
export const magicList = [
  {
    priority: null,
    matchList: [
      {
        type: 'string',
        value: '#!/usr/bin/make',
        offset: '0',
        mask: null,
        matchList: [],
      },
      {
        type: 'string',
        value: '#! /usr/bin/make',
        offset: '0',
        mask: null,
        matchList: [],
      },
    ],
  },
];
export const treeMagicList = [];
export const rootXmlList = [];
