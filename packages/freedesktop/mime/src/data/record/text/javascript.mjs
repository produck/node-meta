/** The media type this record describes. */
export const mediaType = 'text/javascript';

export const commentList = ['JavaScript program'];
export const acronym = null;
export const expandedAcronym = null;
export const genericIconName = 'text-x-script';
export const aliasList = [
  'application/x-javascript',
  'application/javascript',
  'text/jscript',
];
export const subClassOfList = ['application/typescript', 'text/jsx'];
export const globList = [
  {
    pattern: '*.cjs',
    weight: null,
    caseSensitive: false,
  },
  {
    pattern: '*.js',
    weight: null,
    caseSensitive: false,
  },
  {
    pattern: '*.jsm',
    weight: null,
    caseSensitive: false,
  },
  {
    pattern: '*.mjs',
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
        value: '#!/bin/gjs',
        offset: '0',
        mask: null,
        matchList: [],
      },
      {
        type: 'string',
        value: '#! /bin/gjs',
        offset: '0',
        mask: null,
        matchList: [],
      },
      {
        type: 'string',
        value: 'eval \\"exec /bin/gjs',
        offset: '0',
        mask: null,
        matchList: [],
      },
      {
        type: 'string',
        value: '#!/usr/bin/gjs',
        offset: '0',
        mask: null,
        matchList: [],
      },
      {
        type: 'string',
        value: '#! /usr/bin/gjs',
        offset: '0',
        mask: null,
        matchList: [],
      },
      {
        type: 'string',
        value: 'eval \\"exec /usr/bin/gjs',
        offset: '0',
        mask: null,
        matchList: [],
      },
      {
        type: 'string',
        value: '#!/usr/local/bin/gjs',
        offset: '0',
        mask: null,
        matchList: [],
      },
      {
        type: 'string',
        value: '#! /usr/local/bin/gjs',
        offset: '0',
        mask: null,
        matchList: [],
      },
      {
        type: 'string',
        value: 'eval \\"exec /usr/local/bin/gjs',
        offset: '0',
        mask: null,
        matchList: [],
      },
      {
        type: 'string',
        value: '/bin/env gjs',
        offset: '2:16',
        mask: null,
        matchList: [],
      },
    ],
  },
];
export const treeMagicList = [];
export const rootXmlList = [];
